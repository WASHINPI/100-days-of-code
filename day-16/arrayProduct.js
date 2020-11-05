// Simple array product
// https://www.codewars.com/kata/5d0365accfd09600130a00c9

function solve(arr){
    return arr
    .map((a) => [Math.min(...a), Math.max(...a)])
    .reduce(
      (acc, current) => {
        const candidates = [
          acc[0] * current[0],
          acc[0] * current[1],
          acc[1] * current[0],
          acc[1] * current[1],
        ];
        return [Math.min(...candidates), Math.max(...candidates)];
      },
      [1,1]
    )[1];
}

console.log(solve([[-11,-6],[-20,-20],[18,-4],[-20, 1]]));