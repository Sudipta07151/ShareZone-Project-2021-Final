const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((userData, done) => {
    done(null, userData.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(userData => {
            done(null, userData);
        }).catch(err => {
            console.log(err);
        })
})

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            User.findOne({ googleID: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        console.log('USER ALREADY EXISTS');
                        console.log(existingUser);
                        done(null, existingUser);
                    }
                    else {
                        new User(
                            {
                                googleID: profile.id,
                                pictureURL: profile.photos[0].value,
                                name: profile.name.givenName,
                            }
                        ).save()
                            .then(userData => {
                                console.log(userData);
                                console.log('NEW USER CREATED');
                                done(null, userData);
                            })
                    }
                })
        })
);

