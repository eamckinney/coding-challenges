/* You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.*/


function solution(a) {
  let result = '';
  
  for (let i = (a.length-1); i >= 0; i--) {
      let b = (a[i] >>> 0).toString(2);
      let mis = 8 - b.length;
      for (let j = 0; j < mis; j++) {
          b = "0" + b;
      }
      result += b;
  }
  return parseInt(result, 2);
}

/* better solution */
function solution(a) {
  return a.reduce((value, byte, i) => value + byte * Math.pow(256, i));
}
