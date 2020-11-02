// Koch curve
// https://www.codewars.com/kata/5c5abf56052d1c0001b22ce5


function kochCurve(n) {
    let section = [];
    for (let i = n; i > 0; i--){
      section = [...section, 60, ...section, -120, ...section, 60, ...section];
    }
    return section
}


const kochCurve2 = n => {

    if (n === 0)
      return [];

    const last = kochCurve(n - 1);
    return [ ...last, 60, ...last, -120, ...last, 60, ...last ];

}

console.log(kochCurve(2));
console.log(kochCurve2(2));
