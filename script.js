/*
1. Write a program that uses a for loop to output the numbers from 1 to 10
to the console.
*/

// for (let i = 0; i <= 10; i = i + 1) {
//   console.log(i);
// }

/*
2. Write a program that uses a for loop to output the even numbers from 0
to 20 to the console.
*/

// for (k = 0; k <= 20; k = k + 2){
//   console.log(k);
// }

/*
3. Write a program that uses a for loop to output the Fibonacci sequence
up to a 20 numbers.
*/

/*
let a = 0;
let m = 1;
let sum;

for(let j = 0; j <= 20; j = j + 1){

console.log(a); // 0 // 1 // 1 // 2 // 3 // 8
  sum = a + m; // 1 // 2 // 3 // 5 // 8 // 
  a =  m; // 1 // 1 // 2 // 3 // 
  m = sum; // 1 // 2 // 3 // 5 //
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
*/
/*
let a = 0
let b = 1

for (let i = 0; i < 10; i++) {
  let fibonacii = a + b
  console.log(fibonacii)
  a = b
  b = fibonacii
}
*/
/*
4. Write a program that uses a for loop to output a multiplication table for
a certain number entered by the user. For example, if the user enters 5,
the program could output:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/

let x = 5;
for (let i = 1; i <=12; i = i + 1){
  console.log(x + " x" + " " + i + " = "+ x*i);
  
}

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times. The winner with the highest average
score wins a trophy!

Your Tasks
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the
competition, and print it to the console.
Don't forget that there can be a draw, so test for that as well (draw means they
have the same average score)

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// add all the numbers then divided by the amount of numbers 
// create a function 

let dolphinsScoreData1 = (96 + 108 + 89) / 3; // avg 97
let koalasScoreData1 = (88 + 91 + 110) / 3; // avg 96

let dolphinsScoreData2 = (97 + 112 + 101) / 3; // avg 103
let koalasScoreData2 = (109 + 95 + 123) / 3; // avg 109

let dolphinsScoreData3 = (97 + 112 + 101) / 3; // avg 103
let koalasScoreData3 = (109 + 95 + 106) / 3; // avg 103



// console.log(`Data 2: Dolphins average score ${Math.floor(dolphinsScoreData2)}`);
// console.log(`Data 2: Koalas average score ${Math.floor(koalasScoreData2)}`);

// console.log(`Data 3: Dolphins average score ${Math.floor(dolphinsScoreData3)}`);
// console.log(`Data 3: Koalas average score ${Math.floor(koalasScoreData3)}`);

if (dolphinsScoreData1 > koalasScoreData1) {
  console.log(`Data 1: Dolphins average score ${Math.floor(dolphinsScoreData1)}`);
} else {
  console.log(`Data 1: Koalas average score ${Math.floor(koalasScoreData1)}`);
}

if (dolphinsScoreData2 > koalasScoreData2) {
  console.log(`Data 2: Dolphins average score ${Math.floor(dolphinsScoreData2)}`);
} else {
  console.log(`Data 2: Koalas average score ${Math.floor(koalasScoreData2)}`);
}

if (dolphinsScoreData3 > koalasScoreData3) {
  console.log(`Data 3: Dolphins average score ${Math.floor(dolphinsScoreData3)}`);
} else if (dolphinsScoreData3 < koalasScoreData3) {
  console.log(`Data 3: Koalas average score ${Math.floor(koalasScoreData3)}`);
} else{
  console.log(`Data 3: Dolphins and Koalas bot team averaged at score ${Math.floor(koalasScoreData3)}`);
}

// now I'll try using a function 

function calculateAvg(num1, num2, num3){
  let average = Math.floor((num1 + num2 + num3) / 3);
  return average;
}

let dolphinsAvgScoreData1 = calculateAvg(96, 108, 89);
console.log(dolphinsAvgScoreData1);

console.log(calculateAvg(88, 91, 110));