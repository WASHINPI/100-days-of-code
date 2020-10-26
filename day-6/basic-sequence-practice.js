// Basic Sequence Practice

// Url: https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

function sumOfN(n) {
    // insert here your code
    let arr = []

    for(let i=0;i<=Math.abs(n);i++){
        let result =0;
        for(let j=0;j<=i; j++){
            result+=j;
        }
        arr.push(result)
    }

    if(n < 0) return arr.map((item) =>{
        if(!item) return item;
        return item * (-1)
    })

    return arr;

};

function sumOfN2(n) {
    // insert here your code

    return [...new Array(Math.abs(n)+1)]
        .map((item,index,arr) => [...new Array(++index)]
        .map((item,index) => index)
        .reduce((a,b)=> a + b,0))
        .map(item => n < 0 ? !item ? item : -1*item:item)

};


console.log(sumOfN(4));
console.log(sumOfN2(-4));