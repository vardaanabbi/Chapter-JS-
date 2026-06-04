//  proper syntax to use async and await .

// function api() {
//     return new Promise((resolve,reject) => {setTimeout(()=> {console.log("weather data")
//         resolve(200)
//     }, 2000) })
// }
// async function getWeatherData() {
//     await api()
//     await api() }
// 
// getWeatherData()

// function getData(dataId) {
//     return new Promise ((resolve , reject)=> {setTimeout(() => {console.log("data" , dataId)
//         resolve(200)}, 3000);})
// }

// async function GetAllData(){
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }

// GetAllData()



function change_Html (HTML,index){ return new Promise((resolve,reject)=> {
    let ram = Math.floor(Math.random()*(7)+1) ;
    setTimeout(()=>{document.getElementsByClassName("text")[index].innerHTML = HTML ;
    resolve(200)} , ram*1000)
    })}

function bgc(){setTimeout(() => {document.body.style.backgroundColor = "#0a5846"
}, 1000)};

async function hacker() {
    await bgc()  
    await change_Html(" Initializing Hacking " , 0)
    await change_Html(" Reading your files " , 1)
    await change_Html(" Password detected " , 2)
    await change_Html(" Send all Passwords and personal files to Server " , 3)
    await change_Html(" Cleaning Up " , 4)
}

hacker()