const User = require('./../models/user')
const auth = require('../middleware/auth')

module.exports = (app) => {

    // Create new user (Normal user and Admin)
    app.post('/user', async (req, res) => {
        const user = new User(req.body)
        
        try {
            await user.save();
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token })
        } catch (e) {
            res.status(400).send(e)
        }
    })

    app.post('/user/login', async (req, res) => {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken()
            res.send({ user, token })
        } catch (e) {
            res.status(400).send(e)
        }
    })

    app.post('/user/logout', auth, async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)
            await req.user.save()
    
            res.send()
        } catch (e) {
            res.status(500).send()
        }
    })
    
    app.post('/user/logoutAll', auth, async (req, res) => {
        try {
            req.user.tokens = []
            await req.user.save()
    
            res.send()
        } catch (e) {
            res.status(500).send()
        }
    })

    // Get user profile
    app.get('/user/me', auth, async  (req, res) => {
        res.send(req.user)
    })

    // Updated user profile
    app.patch('/user/me', auth, async  (req, res) => {
        res.send("update my user profile")
    })

    // Delete user
    app.delete('/user/me', auth, async  (req, res) => {
        try {
            await req.user.remove()
            res.send(req.user)
        } catch (e) {
            res.status(500).send()
        }
    })
}