//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3]

//* includes()
//*-----------------------------------------------------------
console.log(numbers.includes(4)) //? false
console.log(numbers.includes("4")) //? true

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf(7));

//! join

const strNumbers= numbers.join(" ,")
console.log(strNumbers);

let data=[3,1,5,7,8,910,22,3]
JSON
data=data.sort((a,b)=>b-a).join(" ") 
console.log(data);
//? TO STRING

console.log(numbers.toString());

//? slice

const cars=  ["BMW","Mercedes","Fiat","Anadol"]
console.log(cars.slice(2,3)); 
console.log(cars.slice(2)); 
console.log(cars.slice(0)); 

//! concat
//? ********************
const message=["The weather", "is","very","nice"]
const now= [new Date().toLocaleString()]
console.log(now);
const concattedMsg = message.concat(now,"JS Arrays",[["1,2,3,4"]])
console.log(concattedMsg);

