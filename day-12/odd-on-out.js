// Odd One Out
// https://www.codewars.com/kata/59670a7591dae8b6900000e4



function oddNum(arr) {
    return arr.findIndex(item => item % 2)
}

console.log(oddNum([12, 18, 24, 78, 13, 86, 28]));