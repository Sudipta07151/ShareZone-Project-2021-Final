const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');
const app = express();
require('./routes/authRoutes')(app);


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const PORT = process.env.PORT || 5500;
app.listen(PORT);



