// Odd One Out
// https://www.codewars.com/kata/5949481f86420f59480000e7


const oddOrEven = array => array.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even'


console.log(oddOrEven([12, 18, 24, 78, 13, 86, 28]));