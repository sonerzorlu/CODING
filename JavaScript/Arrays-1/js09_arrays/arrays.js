// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const names = ["emir", "oğuzhan", "levent", "tarik"]

console.log(names)

//? 4 (names dizisinin lenght property'sine erisiyoruz.)
//* non-primitive verilerde ozellikler olabilir ve bunlara
//* erisim . notasyonu ile olabilir.
console.log(names.length)

const x = 5.234 //? primitive
console.log(x.toFixed(2)) //? object wrapper sayesinde
//? Primitive'lerde normal sartlarda property olmaz.

//? Ancak JS kullanimi kolaylastirmak icin bazi durumlarda
//? primitive verileri bir obje sarmlayicisi ile sarmalar.

console.log(typeof names) //? JS de array aslinda object dedigimiz base object'den turetilmistir.

const emptArr = []
console.log(emptArr)

// ! 2.Yöntem (Object Constructor)
const codingLangs = new Array("C", "C++", "JS", "Go")
console.log(codingLangs)

const numbers = new Array(3, 2, 1)
console.log(numbers) //? (3) [3, 2, 1]

//? 10 elemanli bos bir dizi olusturur.
const numbers1 = new Array(10)
console.log(numbers1) //?(10) [empty × 10]

// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3)
console.log(number2) //?(3) [1, 2, 3]

const numbers3 = Array.of(5)
console.log(numbers3) //? [5]

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

const names1 = ["emir", "oğuzhan", "levent", "tarik","Sabata","Mehtap","Rose"]

console.log(names1[1]);
const tarik=names1[3]
console.log(tarik);

console.log(names1[5]);


const lastEl= names1[names1.length-1]
console.log(lastEl);

console.log(names1.at(-4));



//!  Diziye veri yazma

// names1[2]="Levent"
// console.log(names1);
console.log(names1[2].toUpperCase()); 
names1[2]="LEVENT"
console.log(names1);
// names1[2]=names1[2].toUpperCase()
// console.log(names1);


const ageArr=[22,44,55]
const people=["jhon","Vermont",new Date().getFullYear()-1990,true,ageArr]
console.log(people);
console.log(people[4]);
console.log(people.at(-1));


console.log(people[4][1]);
console.log(++people[4][1]);
console.log(people);
console.log(ageArr);


ageArr[0]--;

console.log(people);

//?===============================================
//?    DIZIYI DEGISTIREN(MUTATOR) METOTLAR         
//?===============================================

const cars = ["BMW","Mercedes","Fiat","Anadol"]
console.log(cars.pop());
console.log(cars);



console.log("LEN:" ,cars.push("Lexus"));
console.log(cars);
//? UNSHIFT-shift
cars.unshift("Togg")
console.log(cars);
cars.shift("Togg")
console.log(cars);

//! splice

cars.splice(1,0,"VW")
console.log(cars);
cars.splice(3,1,"Maseratti")
console.log(cars);

//? reverse of array
cars.reverse()
console.log(cars);
//! sort siralama

const num = [2,3,22,1,5,7,6]
num.sort()

cars.sort()
console.log(cars);
console.log(num);

num.sort((a,b)=> a-b)
console.log(num);
num.sort((a,b)=> b-a)
console.log(num);
//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================
