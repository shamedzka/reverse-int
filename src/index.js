module.exports = function reverse(n) {
   let positiveNumber = Math.abs(n);
   let stringNumber = positiveNumber.toString();
   let arr = stringNumber.split('').reverse().join('');
   return Number(arr);
}
