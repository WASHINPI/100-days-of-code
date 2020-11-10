function solve(s){
    //..
    let count=0;

    s.split('')
        .map(item=>item.toLowerCase()==item?count++:count--);

    if(count==0) return s.toLowerCase()
    if(count>0) return s.toLowerCase()
    return s.toUpperCase()

}

console.log(solve("coDe"));