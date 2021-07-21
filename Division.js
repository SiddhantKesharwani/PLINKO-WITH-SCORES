class Bar {
    // constroctor
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        // adding the body to world
        World.add(world, this.body);
    }

    // function called display
    display() {

        var pos = this.body.position;
        rectMode(CENTER);
        fill("cyan");
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
        pop();

        
    }
}