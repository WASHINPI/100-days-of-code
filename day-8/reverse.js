// Reverser
// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168


function reverse(n){
    // your code here
    let result  = 0;
    while(n){
        result = result * 10 + n % 10;
        n = Math.floor(n/10);
    }
    return result;
}


console.log(reverse(123));