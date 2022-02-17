/* Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.*/

function solution(n, firstNumber) {
  if (n/2 == firstNumber) {
      return 0;
  } else if (firstNumber < n/2){
      return (n/2) + firstNumber;    
  } else {
      return firstNumber - (n/2);
  }
  
}
