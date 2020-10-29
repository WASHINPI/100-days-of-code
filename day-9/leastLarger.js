// Least Larger
// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4


function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    const leastLargeVal = Math.min(...largerVals)
    return a.findIndex(num => num === leastLargeVal)
}

function leastLarger2(a, i) {

    return a.indexOf(Math.min(...a.filter(item => item > a[i])))

}

console.log(leastLarger2( [4, 1, 3, 5, 6], 0 ))

console.log(leastLarger( [4, 1, 3, 5, 6], 4 ))