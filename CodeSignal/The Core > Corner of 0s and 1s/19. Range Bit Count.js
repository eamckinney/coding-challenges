/* You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.*/


function solution(a, b) {
  let res = 0;
  for (let i = a; i <= b; i++) {
      res += ((i.toString(2)).split('').map(Number).reduce((a, b) => a + b));
  }
  return res;
}

/* most popular JS solution; I actually like mine better! */
function solution(a, b) {
  var packed = "";
  while(a <= b){
      packed += a.toString(2);
      a++;
  }
  return packed.split('1').length-1;
}
