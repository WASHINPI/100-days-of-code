// Backspaces in string
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s) {
    let arr= s.split('').slice('');

    while(arr.indexOf('#')>=0){
        console.log(arr.indexOf('#'));
        if(arr.indexOf('#')==0){
            arr.splice(arr.indexOf('#'),1)
        }else{
            arr.splice(arr.indexOf('#')-1,2)
        }
    }

	return arr.join('');
};

//jdsfdasns

console.log(cleanString('######831###dhkj####jd#dsfsdnjkf###d####dasns'));