/* You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?*/


function solution(a, b, c) {
  return Math.max(
      a == b && c,
      b == c && a,
      a == c && b
  );
}