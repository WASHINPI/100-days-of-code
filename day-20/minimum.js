// Form The Minimum
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
    //your code here
    return +values.filter((item,index,arr) => arr.indexOf(item) == index).sort().join('');
}

function minValue2(values){
    return Number([...new Set(values)].sort().join(''))
}

console.log(minValue([4, 8, 1, 4]));
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
console.log(minValue2([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));