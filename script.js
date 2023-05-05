// Create a function that is able to tell what the voulme of a cylinder would be

function get_volume(radius, height){
    var pie = 3.14
    var radius = radius * radius
    var height = height
    var volume = Math.round(pie * radius * height)

    return volume
}

console.log(get_volume(5, 20))