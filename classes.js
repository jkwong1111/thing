class Planet{
    constructor(position,velocity,colour, radius, mass, name){
        this.position = position //center
        this.velocity = velocity
        this.acceleration = [0,0]
        this.force = [0,0]
        this.colour = colour
        this.radius = radius //in units
        this.mass = mass
        this.name = name
        this.position_tracker = []
    }
    draw(){
        ctx.fillStyle = this.colour
        ctx.beginPath()
        ctx.arc(units_to_pixels(this.position[0],"x"), units_to_pixels(this.position[1],"y"), units_to_pixels(this.radius,"r"), 0, 2 * Math.PI);
        ctx.fill()
        
        
    }

    update_position(){
        this.velocity[0] += this.force[0]/this.mass
        this.velocity[1] += this.force[1]/this.mass
        this.position_tracker.push([this.position[0],this.position[1]])
        this.position[0] += this.velocity[0]
        this.position[1] += this.velocity[1]
        
        
    }
}

class Mouse{
    constructor(){
        this.x = 0
        this.y = 0
        this.previous_x = 0 //these are to keep last frame's position
        this.previous_y = 0
        this.dx = 0
        this.dy = 0
        this.down = false
    }

    update(){
        if (this.down){
            this.dx = this.x - this.previous_x
            this.dy = this.y - this.previous_y
            //i cant change a global variable inside this class. I'll call another function
            update_camera_position(this.dx/pixels_per_unit,-this.dy/pixels_per_unit)
        }
        this.previous_x = this.x
        this.previous_y = this.y
    }
}