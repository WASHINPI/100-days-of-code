// Thinking & Testing: A * B?
// https://www.codewars.com/kata/5a90c9ecb171012b47000077
function testIt(a,b){
    a = a + ''
    b = b + ''
    let count = 0;
      for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < b.length; k++) {
          count += a[i] * b[k]
        }
      }
      return count
}