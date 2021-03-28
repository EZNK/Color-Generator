document.getElementById("button").onclick = function () {
    let letters = '0123456789ABCDEF';
    const color = "#" + Math.random(letters).toString(16).slice(2,8);
    document.body.style.background = color;
    document.getElementById("colorhex").innerHTML = color;
}