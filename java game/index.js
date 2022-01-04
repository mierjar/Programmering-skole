let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

class paddle {
    
    constructor(gameWidth, gameHeight){
        this.width = 150;
        this.height = 30;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}

//ctx.fillStyle = '#f00'
//ctx.fillRect(20, 20, 100, 100);

//ctx.fillStyle = '#00f'
//ctx.fillRect(370, 260, 50, 50);

//let paddle = new paddle(GAME_WIDTH, GAME_HEIGHT);

//paddle.draw(ctx);
