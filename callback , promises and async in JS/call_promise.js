// let pro = new Promise((resolve , reject)=> {console.log("Namaste Bharat")
// })


// let pro = new Promise((resolve , reject)=> {console.log("Namaste Bharat")
//     reject("chal bhaag ja yaha se")
// })

// const getPromise = ()=>{ return new Promise((resolve , reject) => {console.log("Namaste Bharat") 
//     resolve("ho gya kaam")})} 

//     let prom = getPromise()
//     prom.then(()=> {console.log("promise fulfiled")}),2000

// const getPromise = ()=>{ return new Promise((resolve , reject) => {console.log("Namaste Bharat")
//     reject("nhi hua kaam")})} 

//     // let prom = getPromise()
//     // prom.catch(()=> {console.log("promise broken")})

//     let prom = getPromise()
//     prom.catch((err)=> {console.log("promise broken" , err)})

function async1() {
    return new Promise((resolve ,reject)=> {setTimeout(()=> {console.log("le thook diya tera data pe ") 
        resolve("thook diya")
    }, 3000)})
}

// console.log("thook ikkathi kr rha hun")
// let p1 = async1()
// p1.then((res)=> console.log(res))

function async2() {
    return new Promise((resolve ,reject)=> {setTimeout(()=> {console.log("le moot diya tera data pe ") 
        resolve("moot diya")
    }, 3000)})}

// console.log("moot ikkatha kr rha hun")
// let p2 = async2()
// p2.then((res)=> console.log(res))



// but we want these functions to run 1 after another which is not working here , so what we will be doing here is we will club the call or execution of func2 after execution of func1 by calling func2 inside promise1.then . this is promise chain . 


console.log("thook ikkathi kr rha hun")
let p1 = async1()
p1.then((res)=> {console.log(res) 
console.log("moot ikkatha kr rha hun") 
let p2 = async2() 
p2.then((res)=> {console.log(res)})}
)

//  or 

console.log("thook ikkathi kr rha hun")
async1().then((res)=> {console.log(res) 
console.log("moot ikkatha kr rha hun") 
async2().then((res)=> {console.log(res)})})

//  this above thing is promise chain . more better version (actual promise chain) :

function getData(dataId) {
    return new Promise ((resolve , reject)=> {setTimeout(() => {console.log("data" , dataId)
        resolve("success")}, 3000);})
}

getData(1)
.then((res)=> {return getData(2)})
.then((res)=> console.log(res))


