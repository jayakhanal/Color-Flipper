function randomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = randomColor;
}

function setColor(color) {
    document.body.style.backgroundColor = color;
}
