// const num = prompt('Please enter e number')

// if(num>0){
//     console.log(`${num} is positive`)}
// else if (num<0){console.log(`${num} is negative`)}
// else{console.log(`${num} is equal zero`)}

// const dolar="1000"
// const tl = "500"

// const totalMoney= Number(dolar) + Number(tl) // clear code
// const totalMoney1= +dolar + +tl
// const totalMoney2= parseInt(dolar) + parseInt(tl)
// const totalMoney3= parseFloat(dolar) + parseFloat(tl)

// console.log(`${totalMoney}
// ${totalMoney1}
// ${totalMoney2}
// ${totalMoney3}`)

// // 3 sayidan buyugunu bulma 

// const n1 = +prompt("Number1")
// const n2 = +prompt("Number2")
// const n3 = +prompt("Number3")

//1. yontem

// if(n1>=n2 && n1>=n3){console.log(`${n1} is biggest`);}
// if(n2>=n1 && n2>=n3){console.log(`${n2} is biggest`);}
// if(n3>=n2 && n3>=n1){console.log(`${n3} is biggest`);}

//2. yontem
// let biggest = n1

// if (n2>=biggest){biggest=n2}
// if (n3>=biggest){biggest=n3}

// console.log(`${biggest} is the biggest`);

// yontem 3

// console.log(`the biggest: ${Math.max(n1,n2,n3)}`);

//odev 1
//  const s1 = +prompt("sayi1")
//  let islem = prompt("islem giriniz:+,-,*,/")
//  const s2 = +prompt("sayi2")
// let sonuc = 0
// if(islem==="+"){console.log(sonuc=s1+s2); }
// else if(islem==="-"){console.log(sonuc=s1-s2); }
// else if(islem==="*"){console.log(sonuc=s1*s2); }
// else if(islem==="/"){console.log(sonuc=s1/s2); }
// else {alert("yanlsi islem");}

// switch (islem) {
//     case "+": sonuc=s1+s2
        
//         break;
//     case "-": sonuc=s1-s2
        
//         break;
//     case "*": sonuc=s1*s2
        
//         break;
//     case "/": sonuc=s1/s2
        
//         break;

//     default:
//         alert("yanlis bir islem girdiniz")
//         break;
// } 

// console.log(`${s1}${islem}${s2}=${sonuc}`);

// const year= 11
// const kidsCount=3
// const graduate=true
// const langCount= 5 

// const increase =
//  year >=10 && kidsCount >=2 && graduate == true && langCount >= 2

//  if (increase===true){console.log("deserve increment of salary");}
 
//  if (increase){console.log("deserve increment of salary");}

// const gun = prompt("gun giriniz")
// let secilenProgram = prompt("bir program giriniz: InClass,Teamwork,InClass+selfstudy,selfstudy")
// let program = "bos"

// switch (program) {
//     case "pazartesi": program=InClass
        
        
//         break;
//     case "sali": program="InClass"
        
//         break;
//     case "carsamba": program="InClass"
        
//         break;
//     case "persembe": program="InClass"
        
//         break;
//     case "cuma": program="Teamwork"
        
//         break;
//     case "c.tesi": program="InClass+selfstudy"
        
//         break;
//     case "pazar": program="selfstudy"
        
//         break;

//     default:
//         alert("yanlis bir islem girdiniz")
//         break;
// } 

// console.log(`${gun}${secilenProgram}=${program}`);


// const grade = +prompt("bir grade giriniz")
// const result = grade>= 50 ? "succesful" : "failed"

// console.log(`${result} with ${grade}`);

const grade = +prompt("bir grade giriniz")
const result = grade>= 50 ? `succesful with ${grade}` : `you are failed with ${grade}`

console.log(result);