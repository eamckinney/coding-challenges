/* In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.*/

function solution(n, k) {
  return parseInt((n.toString(2).slice(0,-k) + "0" + n.toString(2).slice(-k+1)), 2);
}

/* ALTERNATIVE */
function solution(n, k) {
  return n & ~(1 << k - 1);
}