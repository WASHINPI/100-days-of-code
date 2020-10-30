// String Task
// https://www.codewars.com/kata/59f11118a5e129e591000134


function stringTask(s){
    let vowels = ['a','e','i','o','u','y']
      return s.toLowerCase()
              .split('')
              .filter( item => vowels.indexOf(item) == -1)
              .map(item => '.'+item).join('');
  }

console.log(stringTask('Codewars'));