
//*********    Assignment-2 ***********/
//Task - 1
//Print: 1-100

for(let i = 1; i <= 100; i++){
    console.log(i)
};

//********************************/

//Task - 2
//Print: 100-1

for(let i = 100; i >= 1; i--){
    console.log(i)
};

//********************************/

//Task - 3
//Sum & Average

let total = 0;

for(let i = 0; i <= 100; i++){
   total += i;
};

let average = total / 100;

console.log(`Total sum is ${total}`);
console.log(`Average number is ${average} `);
//********************************/

//Task - 4
//Even numbers

for(let i = 100; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
};
//********************************/

//Task - 5
//sum of even and odd numbers

let evenSum = 0;
let oddSum = 0;

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        evenSum += i;
    }else{
        oddSum += i
    }
};

console.log(evenSum);
console.log(oddSum);
//********************************/

//Task - 6
//Leap Year

for(let i = 1800; i <= 2000; i++){
    if((i % 400 === 0) || 
    (i % 4 === 0 && i % 100 !== 0)){
        console.log(i)
    }
};
//********************************/

//Task - 7
//Multiplication table

let number2 = 16;

for(let i = 1; i <= 10; i++){
    console.log(number2 * i)
};
/********************************/

//Task - 8
//Factorial

let targetNum = 8;
let factorial = 1;

for(let i = 1; i <= targetNum; i++){
    factorial *= i;
};
console.log(factorial);

/********************************/

//Task - 9
//Divisor

let divisor = 15;
for(let i = 0; i <= divisor; i++){
    if(divisor % i === 0){
        console.log(i)
    }
};

/********************************/
//Task - 10
//Frist and last Digit

//Way: 1
let number = 569854;

let numString = number.toString();
let arrString = numString.split('');

let fristDigit = Number(arrString[0]);
let lastDigit = Number(arrString[arrString.length -1]);

console.log(fristDigit);
console.log(lastDigit);

//Way : 2
let number1 = 569854;

let lastDigit1 = number1 % 10;
console.log(lastDigit1);

while(number1 >= 10) {
   number1 = parseInt(number1 / 10);
};
let fristDigit1 = number1;
console.log(fristDigit1)
/********************************/
//Task - 11
//Sum of Digits

let sumNumber = 123456;
let sumNumberString = sumNumber.toString();
let sum = 0;
for(let value of sumNumberString){
    sum += Number(value);
};
console.log(sum);
/********************************/
//Task - 11
//Pattern

for (let row = 1; row <= 5; row++) {
    let num = '';
    for (let col = 1; col <= row; col++) {
      num = num + col;
    }
    console.log(num)
};


//              /************** */

for (let row = 1; row <= 5; row++) {
    let star = '';
    for (let space = 1; space <= 5 - row; space++) {
      star = star + ' ';
    }
    for (let col = 1; col <= row; col++) {
      star = star + '*';
    }
    console.log(star);
};

 for(let num = 1; num <= 5; num++){
     let print = '';
     for(let num1 = 1; num1 <= num; num1++){
         print += num1;
     }
     console.log(print);
 };

 for(let num = 1; num <= 5; num++){
     let print = '';
     for(let star = 1; star <= num; star++){
        print += '*';
     }
     console.log(print);
 }

 for(let num = 5; num >= 1; num--){
     let print = '';
     for(let star = 1; star <= num; star++){
         print += '*';
     }
     console.log(print);
 };

 for (let num = 1; num <= 5; num++){
     let sum = 0;
     for(let num1 = 1; num1 <= num; num1++){
         sum += num1;
     }
     console.log(sum);
 }