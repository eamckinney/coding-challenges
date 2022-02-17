// You are given a two-digit integer n. Return the sum of its digits.

function solution(n) {
  const first = Math.trunc(n / 10);
  const second = n % 10;
  return first + second;
}
