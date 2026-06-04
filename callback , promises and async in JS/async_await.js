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

function getData(dataId) {
    return new Promise ((resolve , reject)=> {setTimeout(() => {console.log("data" , dataId)
        resolve(200)}, 3000);})
}

async function GetAllData(){
    await getData(1)
    await getData(2)
    await getData(3)
}

GetAllData()