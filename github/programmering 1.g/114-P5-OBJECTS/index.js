let students = ['bjarke', 'sofus', 'marius', 'viktor', 'mie', 'bjørn', 'andreas', 'theis', 'frederik', 'lukas' ]
let balls = []

function setup(){
    noCanvas()
    students.map(item =>{
        let b = new Ball(random(10, 40), random(window.innerWidth), random(window.innerHeight), 'purple ', item)
        balls.push(b)
    })
}
    
function draw() {
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