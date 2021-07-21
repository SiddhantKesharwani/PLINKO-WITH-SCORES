
class Particle {
    constructor(x, y, r) {

        var options = {

            restitution: 1.2,
            friction: 1.5,
            density:2,

        }
        // radius
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);

        // colour in random
        this.color = color(random(0, 555), random(0, 555), random(0, 555));


        World.add(world, this.body);

    }


    display() {

        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop();
      
    }
}