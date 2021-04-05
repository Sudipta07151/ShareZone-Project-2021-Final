const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 3600 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



const PORT = process.env.PORT || 5500;
app.listen(PORT);



