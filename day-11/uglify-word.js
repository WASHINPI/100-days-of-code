// Uglify Word
// https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929


function uglifyWord(s) {
    // your code here
    const regex = /[A-Za-z]/
    let flag = 1;
    return s.split('').map((item,index)=> {
           if(regex.test(item) && flag==1) {
                flag = 0;
                return item.toUpperCase();
           }else if(regex.test(item) && flag==0){
                flag = 1;
                return item.toLowerCase();
           }else{
                flag = 1;
               return item;
           }
    }).join('');
}

function uglifyWord2(s) {
    // your code here
    const regex = /[A-Za-z]/
    let flag = 1;

    return s.split('').map( item => {
           if(regex.test(item) && !!flag) {
                flag = 0;
                return item.toUpperCase();
           }else{
                flag = 1;
                return regex.test(item) ? item.toLowerCase() : item;
           }
    }).join('');
}

function uglifyWord3(s) {
    // your code here
    const regex = /[A-Za-z]+/gi

    return s.replace(regex,str => str.split('').map((item,index) => {
            return index % 2 ? item.toLowerCase() : item.toUpperCase();
        }).join('')
    )
}

console.log(uglifyWord3('hello world'));

console.log(uglifyWord2('hello world'));

console.log(uglifyWord('hello world'));