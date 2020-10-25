// Consecutive items

// Url: https://www.codewars.com/kata/5f6d533e1475f30001e47514


function consecutive(arr, a, b) {
    // Your code here...
    let result = arr.reduce((r,n,i) => {
        if(n ==a || n==b){
            r.push(i)
        }
        return r;
    },[])

    return Math.abs(result[0]-result[1]) === 1

}

function consecutive2(arr, a, b) {
    // Your code here...
   return Math
    .abs(arr.reduce((r,n,i) => {
        if(n ==a || n==b) r.push(i)
        return r;
    },[])
    .reduce((pValue,currentValue)=>{
        if(!pValue) return currentValue
        return pValue-currentValue;
    },0)) == 1

}

function consecutive3(arr, a, b) {
    // Your code here...
   return Math.abs(arr.indexOf(a)-arr.indexOf(b)) === 1

}

console.log(consecutive3([1, 6, 9, -3, 4, -78, 0], -3, 4));

console.log(consecutive2([1, 6, 9, -3, 4, -78, 0], -3, 4));

console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));