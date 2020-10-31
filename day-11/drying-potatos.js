// Drying Potatoes
// https://www.codewars.com/kata/58ce8725c835848ad6000007


function potatoes(p0, w0, p1) {
    return Math.floor(w0 *(100-p0)/(100-p1))
}

console.log(potatoes(82, 127, 80));