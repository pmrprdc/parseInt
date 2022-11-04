// Create a function that receives an array of prices and a discount and
//returns the discounted prices.



const discount1 = "50%";
const discount2 = "10percent"
const discount3 = "The discount is 50 percent"
const arr1 = [322,22, 42, 49, 55];
const arr2 = [322,22, 42, 60, 55];
const arr3 = [100,22, 42, 49, 55];


function discountedPrices(arr, d){
    const disc = parseInt(d)/100;
    return arr.map(x=>x*disc);
    
}



console.log(discountedPrices(arr1, discount1))
console.log(discountedPrices(arr2, discount2))
console.log(discountedPrices(arr3, discount3))

 
