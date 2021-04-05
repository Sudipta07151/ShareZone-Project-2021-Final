const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send('SIGNED OUT');
    })

    app.get('/auth/google/callback', passport.authenticate('google'));
}


mongodb + srv://sudipta:<password>@cluster0.z1nns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority