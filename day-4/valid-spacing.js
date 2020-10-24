
// Valid Spacing

// Url: https://www.codewars.com/kata/5f77d62851f6bc0033616bd8


function validSpacing(s) {
    // write your code here
    return s.trim().split('  ').join('') === s;
}

function validSpacing2(s) {
    // write your code here
    return s.split(' ').every(item => item != '');
}

console.log(validSpacing2("Hello World"));
console.log(validSpacing("Hello World"));

