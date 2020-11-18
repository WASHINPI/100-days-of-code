
// Simple frequency sort
//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

function solve(arr){
    //..
    arr.sort();
    let obj=[]
    var current = null;
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != current) {
            if (cnt > 0) obj.push({[current]:cnt})
            current = arr[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }

    if (cnt > 0) obj.push({[current]:cnt})

    return [].concat.apply([],obj.sort((a,b) => {
            let keyA=Object.keys(a)
            let keyB=Object.keys(b)

            if(a[keyA]==b[keyB]) return keyA-keyB
            return b[keyB]-a[keyA]
        }).map(item=>{
            let key=Number(Object.keys(item))
            return new Array(item[key]).fill(key)
        }))
  }

console.log(solve([1, 1, 1, 5, 6, 7, 8, 9, 9, 10, 13, 15, 16, 16, 17, 18, 18, 18, 19, 20, 21, 21, 22, 22, 25, 25, 26, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 43, 43, 44, 44, 45, 45, 47, 47, 47]));
