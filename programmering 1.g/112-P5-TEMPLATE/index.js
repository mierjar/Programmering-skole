console.log('scriptet loaded')
function setup(){
    frameRate(60)
        createCanvas(windowWidth, windowHeight)
       background ('lightpink')
       select('#info').html('sådan her skriver i noget i html dokumentet')
}

function draw(){
    //mouseX mouseY frameCount map
    
}

function mousePressed(){
    select('#info').html('du klikkede')
}

function mouseReleased(){
    select('#info').html('du slap musen')
}

function keyPressed(event){
    select('#info').html('du trykkede: ' +event.key)
}