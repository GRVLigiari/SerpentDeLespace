class Food {
    constructor (){
        this.size = SQUARE_SIZE;
        this.setRandomPosition();
    }

    setRandomPosition () {
        this.x= Math.round(Math.random() * GAME_SIZE % ((GAME_SIZE / this.size))-1);
        this.y= Math.round(Math.random() * GAME_SIZE % ((GAME_SIZE / this.size))-1);
        console.log(this.x ,this.y);
     }

    
    draw(){
        ctx.fillStyle= '#E30B5C'     
        ctx.shadowColor = '#E30B5C';
        ctx.shadowBlur = 50;
        ctx.lineJoin = 'bevel';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#FF6EFF';
    
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);    }
}
