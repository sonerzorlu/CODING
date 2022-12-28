//*============================================================
//*                       ARITMETIK ORTALAMA
//* ============================================================

console.log("****** OPERATORS ******");



const cola = 20
const gumm = 5
const biscuits = 15

const totalprice= cola + gumm + biscuits;
console.log(totalprice) ;
console.log('TOTAL PRICE:  ' + totalprice) ;

const comments = totalprice + "TL"
console.log(comments);

const s1 = 5,
s2="6",s3="three"

console.log(s1+s2);
console.log(s1-s2);
console.log(s1-s3);
 

const difference = s1-s2
console.log(difference );

const difference1 = s1-s3
console.log(difference1);

console.log(typeof difference1);

console.log(isNaN(difference1));


const yearofBirth=1920
const name="Jane"
console.log(name+ " is " + (2022- yearofBirth) + " years old");
console.log(name+ " is " + (new Date().getFullYear()- yearofBirth) + " years old");

const date = new Date()
console.log(date);

console.log(`${name} is ${2022 - yearofBirth}
 years old`);


 
//  const r= +prompt("Please enter r:")
//  const r= Number(prompt("Please enter r:"))
//  const pi=3.14
//  const square = pi * r * r
// //  const square=pi* r**2
//  console.log(`Square of Circle: ${square}`);
//  console.log(`Square of Circle: ${square.toFixed(3)}`);
//  console.log(`Square of Circle: ${Math.floor(square)}`);
//  console.log(`Square of Circle: ${Math.ceil(square)}`);
//  console.log(`Square of Circle: ${Math.trunc(square)}`);
//  console.log(`Square of Circle: ${Math.round(square)}`);

//  const randomNumber= Math.random()
//  console.log(randomNumber * 100);

//  const randim=Math.ceil(Math.random()*100)
//  console.log(randim);

// artirma azaltma


let a=5
a++
console.log(a++);
y=a+5
console.log(--y);

let z=4
z=z+5
z+=10
console.log(z);

let k=20
k -= 10
console.log({k}); // console.log("k", k);

let b = 4
b *= 3
b= b*3
console.log({b});


// // const number=321
// const number = prompt("Please enter a 3-digit number")

// const ones= number %10
// const tens=Math.floor(number/10)%10
// const hundreds= Math.trunc(number/100)

// // console.log(ones,tens, hundreds);
// console.log(`Hundreds:${hundreds}, Tens:${tens}, Ones:${ones}`);


// karsilastirma operatorleri

const num1=3
console.log(num1==3);
console.log(num1===3);
console.log(num1===`3`);

const num2=`3`

console.log(num1==num2);
console.log(num1!=num2);//false

const num3=5
console.log(num1>num3);//false
console.log(num1<=num3);//true

const num4=`1`
console.log(num2>num4);


const v1=true
const v2=false

console.log(v1&&v2);
console.log(v1||v2);


console.log(!v1);
console.log(!v2);

// const age=prompt("Please enter your age")
// const healthy=confirm('are you healthy')
// console.log(age,healthy);

// if(age>= 18  && healthy==true){
// console.log("ehliyet alabilir")}
// else{console.log("ehliyet alamaz")}

// surekli falsy olan 6 deger
const nal=null
const tanimsiz=undefined
const bos=""
const sayiDegil= NaN
const sifir=0
const falsy=false


console.log(v1&&null&&true&&true&&true)//false--->null && false arar
console.log(v1&&0); // 0
console.log(v1||0);//true || true arar


//=============================================================================
//                              TIP DONUSUMLERI
//?=============================================================================

const dolar="1000"
const tl = "500"

const totalMoney= Number(dolar) + Number(tl) // clear code
const totalMoney1= +dolar + +tl
const totalMoney2= parseInt(dolar) + parseInt(tl)
const totalMoney3= parseFloat(dolar) + parseFloat(tl)

console.log(`${totalMoney}
${totalMoney1}
${totalMoney2}
${totalMoney3}`);



// karra yapilari

const num = prompt('Please enter e number')

if(num>0){
    console.log(`${num} is positive`)}
else if (num<0){console.log(`${num} is negative`)}
else{console.log(`${num} is equal zero`)}



