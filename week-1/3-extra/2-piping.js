/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(num1, num2) {
  return parseFloat((num1 + num2).toFixed(2));
}

function multiply(num1, num2) {
  return num1 * num2;
}

function format(num) {
  return `£${num}`;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
// the code here is hard to read and will take time for yourself to go through and see what is going on as it is all in one line and there's a lot in the one line.
let badCode = format(multiply(add(startingValue, 10), 2));

/* BETTER PRACTICE */
let addTen = add(startingValue, 10);
let multiplyValueByTwo = multiply(addTen, 2);
let formatValue = format(multiplyValueByTwo);
let goodCode = formatValue;

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-piping.js` into your terminal
*/

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("add function - case 1 works", add(1, 3) === 4);
test("add function - case 2 works", add(2.4, 5.3) === 7.7);
test("multiply function works", multiply(2, 3) === 6);
test("format function works", format(16) === "£16");
test("badCode variable correctly assigned", badCode === "£24");
test("goodCode variable correctly assigned", goodCode === "£24");
