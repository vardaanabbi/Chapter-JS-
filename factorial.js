// calculating factorial of a number using reduce and for loops . 

// let n = Number(prompt("Enter the number"))
// let array = []
// for ( let i = 1 ; i < n+1 ;  i ++ ) {array.push(i)}

// console.log(array)
// const func = (e,f)=> {return e*f}
// alert((array.reduce(func)))

function fact(n){
    let result = 1 ;
for (let j = n ; j > 1 ; j--) {
    result = result*j
}
console.log(result)
}

fact(8)
