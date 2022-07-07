const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/api', (req, res) => {
    const color = "#" + Math.random().toString(16).slice(2,8).toUpperCase();
    return res.status(200).send({
        color: color
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})
