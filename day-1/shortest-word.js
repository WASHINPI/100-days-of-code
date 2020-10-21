// Shortest Word

// Url: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
    const arr = s.split(' ');

    let shortLength = 0;

    for(item of arr) {
        if(item.length < shortLength || shortLength == 0) {
            shortLength = item.length;
        }
    }

    return shortLength;
}

const findShortV2 = s => {

    return s.split(' ').reduce((total,currentValue,currentIndex,arr)=> {

        if(!currentIndex) return currentValue.length

        if(currentValue.length < total) return currentValue.length

        return total;

    },0)

}

const findShortV3 = s =>  Math.min(...s.split(' ').map(item => item.length))


console.log(findShortV3("bitcoin take over the world maybe who knows perhaps"));

console.log(findShortV2("bitcoin take over the world maybe who knows perhaps"));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));