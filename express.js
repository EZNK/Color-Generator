const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/api', (req, res) => {
    const letters = '0123456789ABCDEF';
    const color = "#" + Math.random(letters).toString(16).slice(2,8);
    res.json({
        "color": color
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})