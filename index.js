const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;
app.get('/', (req, res) => {
    res.send('HEY HEROKU APP STARTED')
})

app.listen(PORT);