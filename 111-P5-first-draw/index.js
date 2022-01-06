console.log('scriptet loaded')
function setup(){
    frameRate(83297492803)
        console.log('setup')
        createCanvas(windowWidth, windowHeight)
       background ('lightpink')
}

function draw(){
    //mouseX mouseY frameCount map
    select('#info').html(frameCount)

    let xColor = map(mouseX, 0, windowWidth, 0, 255)

    stroke(xColor, 28, 36,)
    noFill()
    ellipse(mouseX, mouseY, frameCount % 60)
    square(mouseX, mouseY, frameCount % 60)
    triangle(mouseX, mouseY, frameCount % 60)

}