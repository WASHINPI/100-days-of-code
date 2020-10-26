// Remove consecutive duplicate words

// Url: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3


const removeConsecutiveDuplicates = s => {
    return s.split(' ').filter((item,index,arr)=>{
        if(index == 0 || item !==arr[index-1]) return item;
    }).join(' ');
}

const removeConsecutiveDuplicates2 = s => s.split(' ').filter((item,index,arr)=>(index === 0 || item !==arr[index-1]) && item).join(' ')

const removeConsecutiveDuplicates3 = s => s.split(' ').filter((item,index,arr) => item !== arr[index-1]).join(' ');

let str = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"


console.log(removeConsecutiveDuplicates(str));

console.log(removeConsecutiveDuplicates2(str));

console.log(removeConsecutiveDuplicates3(str));