// Unlucky Days

// Url: https://www.codewars.com/kata/56eb0be52caf798c630013c0

function unluckyDays(year){
    var d = new Date(year,0,1);
    var year = d.getYear();
    var firday = 0;

    while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 5);
    }

    while (d.getYear() === year) {
        var pushDate = new Date(d.getTime());
        if(pushDate.getDate() == 13){
           firday ++;
        }
        d.setDate(d.getDate() + 7);
    }

    return firday;

  }

function unluckyDays2(year){
    let unlucky=0;
    for(let i=0;i<12;i++){
        if(new Date(year,i,13).getDay() === 5) {
            unlucky ++
        }
    }

    return unlucky;

  }

const unluckyDays3 = () => new Array(12).fill().map((item,index,) =>  new Date(year,index,13).getDay()).filter(item => item == 5).length


console.log(unluckyDays(2015));