// Calculator: Coin Combination
//https://www.codewars.com/kata/564d0490e96393fc5c000029
var coinCombo = function(cents) {
    let arr=[0,0,0,0];
    let data=cents;

    if(parseInt(data/25)>0){
        arr[3]=parseInt(data/25)
        data=data%25;
    }

    if(parseInt(data/10)>0){
        arr[2]=parseInt(data/10)
        data=data%10;
    }

    if(parseInt(data/5)>0){
        arr[1]=parseInt(data/5)
        data=data%5;
    }

    if(parseInt(data/1)>0){
        arr[0]=parseInt(data/1)
        data=data%1;
    }

    return arr;
}

console.log(coinCombo(31));