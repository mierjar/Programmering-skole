var gravity = 0.3;
class Ball{
    constructor(radius, xpos, ypos, col, name){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        this.name = name

        this.gravity = 1
        this.friction = 1- radius/1000
        this.velocity = 0
        this.updrift = 25
        this.button = createButton(this.name)
    }
    
    show(){
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            if (confirm('vil du hoppe med ' + this.name)){
                this.up()
            }else{
                this.radius -= 5
            }
        })
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
        text(this.name, this.xpos, this.ypos + this.radius + 2)
    }

    update() {
    this.velocity += this.gravity
    this.velocity *= this.friction
        this.ypos += this.velocity
        
        if(this.ypos > window.innerHeight - this.radius){
            this.ypos = window.innerHeight - this.radius
            this.velocity = -this.velocity
            
            
        }
    }
    up(){
        this.velocity -= this.updrift
    }
}