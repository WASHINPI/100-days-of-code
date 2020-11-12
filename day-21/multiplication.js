// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

const multiplicationTable = function(size) {
    // insert code here
    let arr=[]

    for(let i=1;i<=size;i++){
        let child =[]
        for(let j=1;j<=size;j++){
            child.push(i*j)
        }
        arr.push(child)
    }

    return arr;
}

const multiplicationTable2 = function(size) {
    // insert code here
    return Array(size).fill(0).map((_,j)=>
        Array(size).fill(0).map((_,i)=>(j+1)*(i+1)));
}

console.log(multiplicationTable2(3));

console.log(multiplicationTable(3));