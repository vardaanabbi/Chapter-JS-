alert("namaste")
console.log("kya haal hai ?")
document.title = "Chapter JS"
document.body.style.backgroundColor = "black"

let b = 6
let c = 8 
console.log(b+c)

let e = 5 ;
let f = 7 ;
let d = e>f ? (e-f) : (f-e) ;
console.log(d)

let obj = { name : "vardaan" , role : "tera baap" , contribution : "tujhe krne me sahyog" }
    for (const key in obj) {console.log(key)}

let a = 1 
    for (let i = 0 ; i<100 ; i++ ) { console.log(a+i)} ;

for ( const a of "vardaan" ) {console.log(a)}

let i = 3 ;
while(i<6) {
    console.log(i)
    i++;}

let j = 6 
do {console.log(j) 
j++} 
while (j<7)

function sum(a,b,c=6) { return a+b+c}
sol = sum(4,7,8)
console.log(sol)

const func1 = (x) => {console.log("I am a fancy arrow function" , x)}
func1(56)

let a = 'vardaan'
let b = "  Vardaan  "
console.log(a.length)

let v = "Vardaan"
console.log(`My name is ${v}`)
console.log(a.slice(3,6))
console.log(a.concat(a , "Vidhi"))
console.log(b.trim())

let arr = [3,6,12,18,24,30]
console.log(typeof(arr))
console.log(arr.toString())
console.log(arr.join(" om devasenapataye namaha "))
console.log(arr.pop())
console.log(arr)
console.log(arr.push("Vardaan"))
console.log(arr)
console.log(delete(arr[6]))
console.log(arr)

arr = [1,2,3,4,5]
new_arr = arr.map((e)=> {return e**2})
console.log(new_arr)

let Divine = ["Skanda" , "Narayana" , "Bhagwati" , "Shiv"]
Divine.forEach(function(divinity){console.log("Jai Bhagwaan" , divinity)}) 

arr = [1,4,7,9,81]
const greaterThan5 = (f)=> {if(f>5) {return true}
else {return false}}
console.log(arr.filter(greaterThan5))

let arr2 = [3,6,9,12]
const reduc = (a,b)=> {return a*b}
console.log(arr2.reduce(reduc))

console.log(Array.from("Vardaan"))