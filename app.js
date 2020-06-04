const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

var port = process.env.PORT || 8080;
app.listen(port);