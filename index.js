const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;
app.use(express.static('./public'));
app.get('/', (req, res) => {
    res.sendFile(index.html);
})
app.listen(PORT);