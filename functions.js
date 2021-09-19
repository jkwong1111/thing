canvas.addEventListener("mousedown", function(evt){
    mouse.down = true
},false)

document.addEventListener("mouseup", function(){
    mouse.down = false
},false)

document.addEventListener("mousemove", function (evt) {
    temp = getMousePos(canvas, evt)
    mouse.x = temp.x
    mouse.y = temp.y
    
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}


canvas.addEventListener("wheel", function(evt){
    if (evt.deltaY < 0){
        pixels_per_unit = pixels_per_unit * 1.1
    }
    else if (evt.deltaY > 0){
        pixels_per_unit = pixels_per_unit * 0.9
    }

})

function units_to_pixels(units,type){ //this is for only one value
    switch(type){
        case "x":
            pixels = canvas.width/2 + (units - camera_position[0]) * pixels_per_unit
            break;
        case "y":
            pixels = canvas.height/2 - (units - camera_position[1]) * pixels_per_unit
            break;
        case "r":
            pixels = units * pixels_per_unit
            break;
    }
    return pixels
}
function pixels_to_units(){

}

function update_camera_position(x,y){//x and y are in units
    camera_position[0] -= x
    camera_position[1] -= y
}

function calculate_force(m1,m2,dx,dy){
    r = (dx**2 + dy**2)**0.5
    net_force = gravitational_constant * m1 * m2 /r**2
    
    return [net_force * dx / r, net_force * dy / r]
}


function update_force(p){
    p.force[0] = 0
    p.force[1] = 0
    for(i = 0; i < planets.length; i ++){
        if(p.name != planets[i].name){
            dx = p.position[0] - planets[i].position[0]
            dy = p.position[1] - planets[i].position[1]
            temp = calculate_force(p.mass, planets[i].mass, dx, dy)
            p.force[0] -= temp[0]
            p.force[1] -= temp[1]
        }
    }
}

function draw_position_tracker(object){
    for(x in object.position_tracker){
        ctx.fillStyle = object.colour
        
        ctx.fillRect(units_to_pixels(object.position_tracker[x][0],"x") ,units_to_pixels(object.position_tracker[x][1],"y"),1,1)
        
    }
}