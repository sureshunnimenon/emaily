const passport = require('passport');

// app.get('/', (req,res) => res.send({Hi: "there I deployed and made a change!"}))
// above line removed after testing

//google API config
//client ID: 133873647520-s2c0i9c5stn5ltbd2ks2tvu917r8pmui.apps.googleusercontent.com
//client secret: DJG9dCcj5Z00CuoD7pTQssFD
module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req,res) => {
        res.redirect('/surveys')
    }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        // res.send(req.user)
        res.redirect('/')
    })

    app.get('/api/current_user', (req, res)=> {
        res.send(req.user)
    })

}
