export class Square {
    public color = 'red';
    public x = 10;
    public y = 5;
    public z = 30;

    constructor(public ctx: CanvasRenderingContext2D) { }

    moveRight() {
        console.log("+x",this.x);
        if(this.x + 1 <= 19){
            this.clearPrev();
            this.x++;
            this.draw();
        }
       
    }

    moveLeft() {
        console.log("-x",this.x);        
       
        if(this.x - 1 >= 0)
        { this.clearPrev();
            this.x--;
            this.draw();
        }
       
    }
    moveUp() {
        if(this.y -1 >= 0){
            console.log("-y",this.y);
            this.clearPrev();
            this.y--;
            this.draw();
        }
      
    }
    moveDown() {
        if(this.y + 1 <= 9){
            this.clearPrev();
            this.y++;
            this.draw();
        }
      
    }

    private draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x * this.z, this.y * this.z, this.z, this.z);
    }

    clearPrev() {
        this.ctx.clearRect(this.x * this.z, this.y * this.z, this.z, this.z);
    }
}