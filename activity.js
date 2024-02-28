// a =5;
// b = 4
// c = 5;

// function combine(a, b, c){
//     return(a*b/c)
// }
// console.log(combine(a,b,c));

const cart =[
    {productName: "T-shirt", price: 20},
    {productName: "Jeans", price: 50 },
    {productName: "Sneakers", price: 80},
    {productName: "Mask", price: 40 },
    {productName: "Dress", price: 90},
    {productName: "Swimsuit", price: 100 },
];


const calculateTotalPrice =(cart) => { 
    let totalPrice =0;
    for (let product of cart){
        totalPrice += product.price
    }
    return totalPrice;
}

const totalPrice = calculateTotalPrice(cart);
console.log("Total Price: " + totalPrice);

