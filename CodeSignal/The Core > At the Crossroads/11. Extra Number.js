/* You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?*/


/* MY SOLUTION */

function solution(a, b, c) {
  return Math.max(
      a == b && c,
      b == c && a,
      a == c && b
  );
}

/* Solution using XOR Bitwise Operator */

function solution(a, b, c) {
  return (a^b)^c
}


/* Solution using chaining ternary operators */

solution =(a, b, c) => a==b? c: a==c? b:a