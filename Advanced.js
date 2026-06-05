function sum(a,b,c){ return a+b+c }

let arr = [1,5,7,3,4,9,8]
console.log(sum(...arr))

const [a,d,...baaki] = [2,6,8,9,0,5,4,3]
console.log(a,d,baaki)