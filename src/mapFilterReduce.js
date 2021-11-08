//Referans Tip
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]

//SPA : Single Page Application


//MAP
// console.log("<ul>")
// cart.map(product => {
//     console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "₺" + "</li>")
// })
// console.log("</ul>")


//FİLTER
let quantityOver2 = cart.filter(product => product.quantity > 2 && product.unitPrice > 30)
// console.log(quantityOver2)

//REDUCE
let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity, 0)
//console.log(total)


function addToCart(sepet) {
    //Push yaptığında Angular,Vue ekranı yeniler ama React yenilemez.
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}
addToCart(cart);
//console.log(cart)

//Değer Tip
let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
//console.log(sayi)

