class Box{
    constructor(xPosition, yPosition, width, height) {
        var object_options = {
            isStatic : false,
            friction: 1.0,
            density: 0.5,
            restitution: 0.7
        }
        this.body = Bodies.rectangle(xPosition, yPosition, width, height,object_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    // Function
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
