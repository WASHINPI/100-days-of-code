// Stones on the Table
// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a

function solve(stones){
    return stones.split('').reduce((total,cValue,cIndex,arr) => {
        if(cValue == arr[cIndex-1]) total ++
        return total
    },0);
}

function solve1(stones){
    return stones.split('').filter((cValue,cIndex,arr) => (cValue === arr[cIndex-1])).length;
}

function solve2(stones){
    return stones.split('')
        .reduce((total,cValue,cIndex,arr) => (cValue !== arr[cIndex-1]) ? total : ++total,0);
}


console.log(solve('RRRRGGGGBBBB'));
console.log(solve1('RRRRGGGGBBBB'));
console.log(solve2('RRRRGGGGBBBB'));
