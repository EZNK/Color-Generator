const app = require('express')();

app.get('/api', (req, res) => {
    let letters = '0123456789ABCDEF';
    let color = "#" + Math.random(letters).toString(16).slice(2,8);
    res.json({
        "color": color
    })
})

app.listen(3000, () => console.log('http://localhost:3000/api'))