mouse = new Mouse()
ctx.fillRect(0,0,1200,800)


function solar_system(){
    planets.push(new Planet([0,0],[0,0],"yellow",3,1000,"sun"))
    planets.push(new Planet([20,0],[0,0.75],"lightblue",0.5,1,"earth"))
    planets.push(new Planet([-10,0],[0,-1],"grey",0.5,1,"mercury"))
    planets.push(new Planet([15,0],[0,-0.9],"orange",0.5,1,"venus"))
    planets.push(new Planet([30,0],[0,-0.5],"AntiqueWhite",1,50,"jupiter"))
    planets.push(new Planet([38,0],[0,-0.6],"orange",0.3,0.5,"titan"))
    planets.push(new Planet([0,40],[-0.3,0],"Chartreuse",0.3,1,"asteroid"))
}

solar_system()


function three_body(){
    planets.push(new Planet([0,0],[0,0],"red",1,300,"a"))
    planets.push(new Planet([20,20],[0,0],"blue",1,300,"b"))
    planets.push(new Planet([23.5,-20],[0,0],"green",1,300,"g"))
}

//three_body()

function sling_shot(){
    planets.push(new Planet([0,0],[0,0],"yellow",2,1000,"a"))
    planets.push(new Planet([0,20],[-0.2,-0.5],"lightblue",0.5,3,"b"))

}
//sling_shot()
setInterval(loop,30)

function loop(){
    for(y = 0; y < planets.length; y ++){
        update_force(planets[y])
    }

    
    for(x in planets){
        planets[x].update_position()
    }

    mouse.update()
    ctx.clearRect(0,0,1200,800)
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,1200,800)

    for(y = 0; y < planets.length; y ++){
        draw_position_tracker(planets[y])
    }
    for(x in planets){
        planets[x].draw()
    }

    

}