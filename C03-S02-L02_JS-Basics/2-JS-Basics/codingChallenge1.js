var name1 = 'lawrie';
var age1 = 50;
var height1 = 58;
var name2 = 'Annette';
var age2 = 42;
var height2 = 57;
var name3 = 'Kobie';
var age3 = 72;
var height3 = 68;


var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;
var score3 = height3 + age3 * 5;

if (score1 > score2) {
    console.log(name1 + ' wins!')
} else if (score1 === score2) {
    console.log(name1 + ' and ' + name2 + ' are both Winners!')
} else {
    console.log(name2 + ' Wins! ')
}

if (score3 > score1 &&  score3 > score2) {
    console.log(name3 +' would have won if he was playing!')
} 























