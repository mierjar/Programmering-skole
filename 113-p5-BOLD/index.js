let x, y, diameter
let gravity = 1
let friction = 0.97
let velocity = 0
let updrift = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 12
let score = 0

function showRect() {
    rect(rectX, rectY, rectW, rectH)
    rect(rectX, 0, rectW, rectH)
}

function updateRect() {
    rectX -= rectSpeed
    if (rectX <=0){
        rectX = windowWidth
        rectH = random(200,150)
        rectY = windowHeight - rectH
    }
    if (rectX == windowWidth/2){
        score++
    }
}



function setup(){
    createCanvas(windowWidth, windowHeight)
    background('pink')
    x = windowWidth/2
    diameter = 32
    y = diameter/2
    rectW = 40
    rectH = 100
    rectX = windowWidth
    rectY = windowHeight - rectH
    select('#info').html(score)
}

function show() {
    ellipse(x, y, diameter)
}
this.y += this.velocity;
this.velocity += this.gravity;
  


function update() {
    velocity += gravity
    velocity *= friction
    y += velocity
    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    }
    select('#info').html(velocity)
}

function draw() {
    background('pink')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)

         
}

function keyPressed(key){
    console.log(key)
    if(key.key == ' '){
        velocity-= updrift
    }
}