let bg_color = ["red" , "blue" , "black" , "yellow" , "aqua"]
let txt_color =  ["yellow" , "brown" , "chocolate" , "pink" , "orange"]

function bg_color_selector(bg_color){
let ran = Math.random()
if (ran <= 0.2) { return bg_color[0]
} 
else if (0.2 < ran && ran <= 0.4) { return bg_color[1]
}
else if (0.4 < ran && ran <= 0.6) { return bg_color[2]
} 
else if (0.6 < ran && ran <= 0.8) { return bg_color[3]
} 
else { return bg_color[4]
} 
}

function color_selector (txt_color){
    let ran = Math.random()
if (ran <= 0.2) { return txt_color[0]
} 
else if (0.2 < ran && ran <= 0.4) { return txt_color[1]
}
else if (0.4 < ran && ran <= 0.6) { return txt_color[2]
} 
else if (0.6 < ran && ran <= 0.8) { return txt_color[3]
} 
else { return txt_color[4]
} 
}

let element = document.getElementsByClassName("box")
for (let index = 0; index < bg_color.length; index++) {
    let bgc = bg_color_selector(bg_color)
    element[index].style.backgroundColor= bgc 
    let tc = color_selector(txt_color)
    element[index].style.color = tc 
}
