console.log("Hi İsmail!")

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//Array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for(let i = 0; i < konutKredileri.length; i++){
    document.write("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

