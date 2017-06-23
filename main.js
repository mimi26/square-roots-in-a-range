// Given two numbers, A and B, find the total number of whole number 
// square roots in the range of numbers from A to B. For example, if A is 4 and B is 17
// the output should be 3: 4, 9, and 16

function solution(A,B) {  
  let numArr = [...Array(1 + (B - A)).keys()].map(num => num + A);
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (Number.isInteger(Math.sqrt(numArr[i]))) {
      total++;
    }
  }
  return total;
}