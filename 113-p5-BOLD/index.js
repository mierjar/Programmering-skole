let x, y, diameter
let gravity = 1
let friction = 0.97
let velocity = 0
let updrift = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0
let randomnizer = 50

function showRect() {
    rect(rectX, rectY, rectW, rectH)
    rect(rectX, 0, rectW, rectH)
    fill('purple')
}

function updateRect() {
    rectX -= rectSpeed
    if (rectX <= 0 - rectW){
        rectX = windowWidth
        rectH = random(200,360)
        rectY = windowHeight - rectH
    }
    if (rectX == windowWidth/2){
        score++
    }
}



function setup(){
    createCanvas(windowWidth, windowHeight)
    background('pink')
    frameRate(100)
    x = windowWidth/2
    diameter = 32
    y = diameter/2
    rectW = 40
    rectH = 100
    rectX = windowWidth
    rectY = windowHeight - rectH
}

function show() {
    ellipse(x, y, diameter)
    fill('lightblue')
}
//this.y += this.velocity;
//this.velocity += this.gravity;
  


function update() {
    velocity += gravity
    velocity *= friction
    y += velocity

    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    if(!alert('Game Over')){window.location.reload();}
    }
    if (y < 0){
        y = windowHeight/2
        if(!alert('Game Over')){window.location.reload();}
        x = 0
    }
    //select('#info').html(velocity)
}

function draw() {
    background('pink')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
    collision()
         
}

function keyPressed(key){
    console.log(key)
    if(key.key == ' '){
        velocity-= updrift
    }
}

function collision() {
    if (((x > rectX) && (x < rectX + rectW) &&
    (y > rectY) && (y < rectY + rectH))){
        x = 0
        if (!alert('Game over')){window.location.reload();}
    }
    if (((x > rectX) && (x < rectX + rectW) &&
    (y > 0) && (y < 0 + rectH))){
        x = 0
        if (!alert('Game over')){window.location.reload();}
    }
}