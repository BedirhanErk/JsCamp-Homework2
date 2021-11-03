function addToCart(quantity,productName="Apple") {
    console.log("Sepete eklendi: Ürün : " + productName + " Adet : " + quantity)    
}

// addToCart();
// addToCart(10);
// addToCart(15);

let sayHello = ()=>{
    console.log("Hello World!")
} 

// sayHello();

let sayHello2 = function () {
    console.log("Hello World 2!")
}

// sayHello2();

function addToCart2(productName,qunatity,unitPrice) {
    
}

// addToCart2("Elma",5,10);
// addToCart2("Armut",2,20);
// addToCart2("Limon",3,15);



let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

// addToCart3(product1);

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
// console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
// console.log(sayi1)


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:11, quantity:6},
    {productName:"Karpuz", unitPrice:12, quantity:7}
]

//addToCart4(products);


//REST : Geriye Kalanlar, Toparlar
function add(bisey,...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]        
    }
    console.log(total);
    console.log(bisey);
}

// add(20,30);
// add(20,30,40);
// add(20,30,40,50);


//SPREAD: Ayrıştırmak
let numbers = [30,10,500,600,120]

// console.log(...numbers)
// console.log(Math.max(...numbers))

//DESTRUCTURİNG: Array veya Obje içindeki değerleri değişkenlere atama
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population: "10M"},
    {name:"Marmara", population: "30M"},
    {name:"Karadeniz", population: "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name);
// console.log(icAnadolu.population);
// console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} =
     {productName:"Elma", unitPrice:10, quantity:5})

// console.log(newProductName);
// console.log(newUnitPrice);
// console.log(newQuantity);