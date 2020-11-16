//Sum two arrays
//https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/solutions/javascript
function addArrays(array1, array2) {
    // return [array1,array2]
     let arrayToNumber1 = parseInt(array1.join(''));
     let arrayToNumber2 = parseInt(array2.join(''));

     if(isNaN(arrayToNumber1)) arrayToNumber1=0
     if(isNaN(arrayToNumber2)) arrayToNumber2=0

     let res =(arrayToNumber1 + arrayToNumber2).toString();

     if(isNaN(res) ||res=='0')return []
     let first=[];
     let second=res.split('').map(Number)
     if(res.substr(0,1)=='-'){
          first =[Number(res.substr(0,2))];
          second=res.substr(2).split('').map(Number)
     }

     return [...first,...second]

 }

 console.log(addArrays([], []));