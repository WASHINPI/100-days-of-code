//Simple reversed parenthesis
//https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

function solve(s){
    let re = /(\(\))/gi;
    let rest= s.replace('()','');
    let result=0;

    if(s.length%2) return -1;

    let loops=true;

    while(loops){
        let data = rest.replace(re, match => '');
        if(data.length==rest.length) loops= false;
        rest=data;
    }

    while(rest.length){
        let word=rest.substr(0,2);
        if(word==")(") result+=2;
        if(word=="((") result+=1;
        if(word=="))") result+=1;
        rest=rest.substr(2)
    }

    return result;

}

console.log(solve(")()("));//2

console.log(solve("((()"));//1

console.log(solve("((("));//-1

console.log(solve("())((("));//3
