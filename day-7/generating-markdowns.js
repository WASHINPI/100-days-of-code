// Generating Markdowns
// https://www.codewars.com/kata/5f656199132bf60027275739


function generateMarkdowns(markdown,text,urlOrLanguage) {
    // write your code here
    if(markdown == 'link'){
        return `[${text}](${urlOrLanguage})`
    }else if(markdown == 'img'){
        return `![${text}](${urlOrLanguage})`
    }else {
        return "```"+urlOrLanguage+'\n'+text+"\n"+"```";
    }
};

console.log(generateMarkdowns('img',"Hello World",'javascript'));
