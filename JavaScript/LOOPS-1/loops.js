//===================================================
//                 FOR LOOOPS                             
//=====================================================
console.log("*******FOR***********");

// const n= +prompt("enter a number")
// let sum = 0

// for (let i=1;i<=n;i++){sum=sum+i}
1
// console.log(sum);

// orenk; 0-100 arasinda n tane rastgele sayi ureten kod yaziniz
// const num = Number(prompt("enter a number"))

// for(let j=0 ; j<num  ; j++)
// {const randomNum=Math.round(Math.random()*100)
// console.log(`${j}, random number ,${randomNum} `);
// }

// asal sayi bulma


// const primeNum=Number(prompt('enter a number'))

// for(let i = 2; i<primeNum; i++){

// if(primeNum%i ===0){
//     console.log(`${primeNum} is not a prime number`)
// } else  {console.log(`${primeNum} is a prime number`)}


// }



// const primeNum=Number(prompt('enter a number'))
// let isPrime = true
// for(let i = 2; i<primeNum; i++){

// if(primeNum%i ===0){
//     console.log(`${primeNum} is not a prime number`)
//     isPrime=false
// } 
// if(isPrime===true && primeNum>1){console.log(`${primeNum} is a prime number`);}
// }
// if(primeNum<2){console.log(`${primeNum} is not a prime number`);}

const primeNum = Number(prompt("Enter a number"))

//? Flag method
let isPrime = true

if (primeNum < 2) {
  console.log("Number should be bigger than 1 ")
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      //? Tam bolunuyorsa asal degildir
      console.log(`${primeNum} is not a prime number-${i}`)
      isPrime = false
      break
    }
  }

  if (isPrime === true) {
    console.log(`${primeNum} is a prime number`)
  }
}
