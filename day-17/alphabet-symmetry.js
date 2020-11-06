// Alphabet symmetry
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

function solve(arr){
    //code
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return arr
            .map(item => item.split('')
            .reduce((total,value,index) => alpha.indexOf(value.toLowerCase())== index ? ++total:total ,0))

};

function solve2(arr){
    //code
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return arr.map(item => item.toLowerCase().split('').filter((item,index)=>alpha.indexOf(item)==index).length)

};

console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));