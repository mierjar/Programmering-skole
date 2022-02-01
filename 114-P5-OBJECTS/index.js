let students = ['bjarke', 'sofus', 'marius', 'viktor', 'mie', 'bjørn', 'andreas', 'theis', 'frederik', 'lukas' ]
let balls = []

function setup(){
    createCanvas(400, 400)
    background('pink')
    students.map(item =>{
        let b = new Ball(random(10, 40), random(width), random(height), 'purple ', item)
        balls.push(b)
    })
}
    
function draw() {
    createCanvas(400, 400)
    background('pink')
    balls.map( item =>{
        item.show()
        item.update()
    })
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map( item => item.up())
    }
}