// L2: Triple X
// https://www.codewars.com/kata/568dc69683322417eb00002c

function tripleX(str){
    let index = str.split('').findIndex(item => item === 'x');
    return str[index] === str[index+1]
}

const tripleX2 = str => {
    let x = str.indexOf('xx')
    return x > -1
}

function tripleX3(str){
    return str.substr(str.indexOf('x'),2) === 'xx';
}

console.log(tripleX3("abrxxaxxs"));
console.log(tripleX2("abrxxxas"));
console.log(tripleX("abraxxxas"));