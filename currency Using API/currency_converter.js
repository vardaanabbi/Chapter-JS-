// const url = "https://open.er-api.com/v6/latest/USD"


// const getData = async ()=> {

//     let response = await fetch(url)
//     console.log(response)
//     let data = await response.json()
//     console.log(data)
//                             }

// //  or using promise chains :

// function getData(){
//     fetch(url).then
//     ((response)=> {response.json()})
//     .then((data)=>{console.log(data)})
// }


// Mini project : Currency Converter :

const populate = async (value)=> {
    
    let my_html = ""
url = `https://currencyapi.net/api/v2/rates?base=USD&output=json&key=f9710938ec6af0ab1e0fa6045403f85c4bc1` 
let response = await fetch(url)
let data = await response.json()

document.querySelector(".output").style.display = "block"

for (let key in data["rates"]){
    my_html += `<tr>
<td> ${key}   </td>
<td> ${data["rates"][key]} </td>
<td> ${data["rates"][key]*value} </td>
 </tr> `}

const table = document.querySelector("tbody")
table.innerHTML = my_html
}

const btn = document.querySelector(".btn")
btn.addEventListener("click" , (e)=> { e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    populate(value)})

