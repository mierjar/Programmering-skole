function setup(){
    createCanvas(windowWidth, windowHeight)
    background('pink')
    frameRate(100)
    x = windowWidth/2
    diameter = 100
    y = diameter /2
}
function show() {
    ellipse(x, y, diameter)
    fill('lightblue')
}

function draw() {
    background('pink')
    show()
    update()
}