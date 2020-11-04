// Even or Odd - Which is Greater?
// https://www.codewars.com/kata/57f7b8271e3d9283300000b4

function evenOrOdd(str) {

    let numbers= str.split('').map(Number)
    let odd = numbers.filter((item)=> item%2).reduce((a,b)=>a+b,0);
    let even = numbers.filter((item)=> item%2 != true).reduce((a,b)=>a+b,0)

    if(even == odd)return "Even and Odd are the same";
    if(even > odd)return "Even is greater than Odd";
    if(even < odd)return "Odd is greater than Even";

}

console.log(evenOrOdd('1234'));