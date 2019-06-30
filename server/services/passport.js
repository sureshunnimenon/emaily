const passport = require('passport')
const keys = require('../config/keys')
const mongoose = require('mongoose')

const GoogleStrategy = require('passport-google-oauth20').Strategy

const User = mongoose.model('users')

//below function bsically creates cookie using the data we fed here user.id
passport.serializeUser((user, done) => {
    done(null, user.id)  // err is null here, we dont expect any error to occur, user.id is the one we fetch
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null,user)
    })
})
// inform passport to use the strategy
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
    },  (accesstoken, refreshToken, profile, done) => {
        // console.log(`access token`, accesstoken);
        // console.log('refresh token', refreshToken);
        // console.log(profile)
            User.findOne({googleId: profile.id})
            .then((existinguser) => {
                if(existinguser){
                    // no need to create record
                    done(null,existinguser) // first arg is err, here since no err we put null
                }
                else{
                    //make a new record
                    new User({googleId: profile.id}).save().then(user => done(null,user))
                }
            })
        })
);

