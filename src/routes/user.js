module.exports = (app) => {

    // Create new user (Normal user and Admin)
    app.post('/user/create', (req, res) => {
        res.send("Create user")
    })

    // Get user profile
    app.get('/user/me', (req, res) => {
        res.send("Get my profile")
    })

    // Updated user profile
    app.patch('/user/me', (req, res) => {
        res.send("update my user profile")
    })

    // Delete user
    app.delete('/user/me', (req, res) => {
        res.send("Delete my user profile")
    })
}