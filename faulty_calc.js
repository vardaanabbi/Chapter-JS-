random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second Number")
let c = prompt("Enter operation to be performed")

let obj = {"+" : "-" , "*":"+" , "-":"/" , "/":"**"}

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    d = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
}