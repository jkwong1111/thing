const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const demo = document.getElementById("demo")
canvas.width = 1200
canvas.height = 800

//physics
gravitational_constant = 0.01

//rendering
pixels_per_unit = 10
camera_position = [0,0] //in units

//planets
planets = []