/* Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
solution(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.*/

function solution(a) {
  let b = a.toString(2);
  let res = '';
  for (let i = b.length-1; i>=0; i--) {
      res += b[i];
  }
  return parseInt(res, 2);
}

/* highest rated solution */
function solution(a) {
  r=0;
  while(a){
      r=r<<1
      r+=a%2
      a=a>>1
  }
  return r
}

/* other solution similar to mine, but a bit more efficiently written */
function solution(a) {
  return parseInt([...a.toString(2)].reverse().join(''), 2);
}