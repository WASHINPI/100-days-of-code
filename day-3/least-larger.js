// Who is the killer?

// Url: https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

function killer(suspectInfo, dead) {

    let killerName;

    dead.map(name => {
          for(key in suspectInfo) {
              if(suspectInfo[key].some(item => item == name)){
               killerName = key;
                break;
              }
           }
      })

    return killerName


  }

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']));