// Codewars Leaderboard Climber
// https://www.codewars.com/kata/57d28215264276ea010002cf/

function leaderB2(user, user_score, your_score){

    let needs = user_score-your_score;

    if(needs < 0) return 'Winning!';

    if(needs==0) return 'Only need one!';

    let beta = ~~(needs/3),eight= needs%3;

    return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${eight} 8kyu kata.${ beta+eight > 1000 ? ' Dammit!':'' }`;

}

function leaderB(user, user_score, your_score){
    let needs = user_score-your_score;
    let bataKata = Math.floor(needs / 3);
    let kata = needs - bataKata * 3;
    let totalKata = bataKata + kata;

    if(user_score < your_score){
        return 'Winning!';
    }else if(your_score==user_score){
        return 'Only need one!';
    }else {
        return `To beat ${user}'s score, I must complete ${bataKata} Beta kata and ${kata} 8kyu kata.${totalKata > 1000 ? ' Dammit!':'' }`;
    }
}

console.log(leaderB2('g964', 36097, 20000));

console.log(leaderB('g964', 36097, 20000));
