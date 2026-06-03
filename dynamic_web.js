document.body.style.backgroundColor = "black"

function format_views (views){
    if (views >= 1000 && views < 1000000) { return (views/1000).toFixed(1) + "K"}

    else if ( views >= 1000000) { return (views/1000000).toFixed(1) + "M"
        }
    else { return views.toString() }
    }

function dynamo(thumbnail , title , channel , views , time , duration ) {
    
let real_views = format_views(views)

let main_container = document.createElement("div")
main_container.setAttribute("class" , "container")
main_container.style.width = "90vw"
main_container.style.border = "white"
main_container.style.height = "44vh"
main_container.style.margin = "auto"
main_container.style.display = "flex"
main_container.style.gap = "12px"
main_container.style.borderStyle = "solid"


let box1 = document.createElement("div")
box1.setAttribute("class" , "box1")
box1.style.width = "36vw"

box1.style.height = "44vh"
box1.style.borderRadius = "12px"
box1.style.backgroundImage = ` url(${thumbnail})`
box1.style.backgroundSize = "cover"

let box2 = document.createElement("div")
box2.setAttribute("class" , "box2")
box2.style.width = "54vw"
box2.style.height = "44vh"
box2.style.borderRadius = "25px"
box2.style.display = "flex"
box2.style.justifyContent = "top"
box2.style.flexDirection = "column"
box2.style.gap = "12px"
box2.style.marginTop = "20px"
box2.style.paddingTop = "5px"


let line1 = document.createElement("div")
line1.innerHTML = `${title}`
line1.style.color = "white"
line1.style.fontWeight = "600"
line1.style.fontFamily = "sans-serif"
line1.style.fontSize = "17px"


let line2 = document.createElement("div")

line2.innerHTML = `${channel} . ${real_views} views . ${duration} months ago`
line2.style.color = "gray"
line2.style.fontFamily = "sans-serif"
line2.style.fontWeight = "400"
line2.style.textAlign = "start"
line2.style.fontSize = "16px"

let time_tag = document.createElement("div")
time_tag.style.color = "white"
time_tag.style.width = "4%"
time_tag.style.height = "4%"
time_tag.style.top = "41vh"
time_tag.style.zIndex = "10"
time_tag.style.position = "absolute"
time_tag.style.left = "36vw"
time_tag.style.backgroundColor = "black"
time_tag.style.borderRadius = "6px"
time_tag.innerHTML = `${time}`
time_tag.style.textAlign = "center"
time_tag.style.fontFamily = "sans-serif"
time_tag.style.fontWeight = "500"
time_tag.style.paddingTop = "2px"



document.body.append(main_container)
main_container.append(box1)
main_container.append(box2)
box2.append(line1)
box2.append(line2)
main_container.append(time_tag)

}

dynamo(thumbnail = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw" ,"Welcome to the Hood | lets learn Web Dev" , channel = "ExcelWithSkanda" ,views = 2876540 ,time = "24:24" , duration = 5 )