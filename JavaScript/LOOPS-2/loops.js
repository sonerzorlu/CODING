//===================================================
//                 FOR LOOOPS-2                         
//=====================================================
console.log("*******FOR***********");

// 0-100 arasi sayi grimezsen hata veren program

// let grade = +prompt("enter your grade")

// while (grade<0 || grade >100) {
//   console.log("Grade should be 0-100");
//   number= +prompt("your grade")
  
// }
// console.log(`Your Grade:,${grade}`);

////////////////////donguler/////////////////////

// let again= "" 
// do  {let avg=0
// const midterm = +prompt("enter your midterm ")
// const final = +prompt("enter ur final")

// avg= midterm*0.4 + final*0.6
// console.log(`your score is ${avg}`);

// again=prompt("do you want to continue(e/E)")

// }while (again===`e` || again===`E`)
// console.log(`see  you later :)`);

/////////////////nested loops//////////////////


let result
let line= ""
for (let row=1 ;row<=10; row++){
//console.log();

for(let col=1; col<=10; col++){
  
result= row*col 
line+= result + "\t"
//console.log(result);

 // console.log(col*row);
}
line+= "\n"
}console.log(line);