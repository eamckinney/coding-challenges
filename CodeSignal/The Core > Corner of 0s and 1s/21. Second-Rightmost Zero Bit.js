
/*Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit.*/

function solution(n) {
  return Math.pow(2, n.toString(2).split('').reverse().indexOf('0', n.toString(2).split('').reverse().indexOf('0')+1));
}

/* best solution; holy moly! */
function solution(n) {
  return ~(n |= -~n) & -~n;
}

//~ Inverts the bits of the operand??? where have you been this whole time??