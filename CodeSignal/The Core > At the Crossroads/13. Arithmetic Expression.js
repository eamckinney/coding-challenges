/* Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.*/

function solution(a, b, c) {
  return a/b==c || a+b==c || a-b==c || a*b==c;
}

/* ALTERNATE SOLUTION */
function solution(A, B, C) {
  return [...'+-*/'].some(op => eval(`${A}${op}${B}`) === C)
}

//spread syntax is used to iterate through the string.
//.some() evaluates each expression (using arrow function) and returns true if at least one expression is truthy.
