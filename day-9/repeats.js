// Sum of array singles
// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr){

    let duplicate = arr.filter((item,index,self) => self.indexOf(item)!== index);

    return arr.filter(item => duplicate.indexOf(item) < 0)
                .reduce((total,value) => total + value,0);
};

function repeats2(arr){

    return arr
        .filter( item => arr.indexOf(item) === arr.lastIndexOf(item))
        .reduce((a,b) => a+b);

};

const repeats3 = (arr) =>
    arr.filter((x) =>
        arr.filter((y) => y == x).length == 1)
        .reduce((a, b) => a + b);


console.log(repeats3([4,5,7,5,4,8]));
console.log(repeats2([4,5,7,5,4,8]));
console.log(repeats([4,5,7,5,4,8]));
