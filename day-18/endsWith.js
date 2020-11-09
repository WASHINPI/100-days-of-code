// String ends with?
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
    // TODO: complete
    return str.substr(str.length-ending.length) == ending
}

function solution2(str, ending){
    // TODO: complete
    return str.endsWith(ending)
}

console.log(solution2('abcde', 'de'));
console.log(solution2('abcde', 'abc'));