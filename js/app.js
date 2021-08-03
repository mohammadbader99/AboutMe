'use strict';

alert('Welcome to my guessing game..');

let userName = prompt('What is your name?');

while (userName === '' || userName === null) {
    userName = prompt('Please enter your name..');
}

alert('Nice name ' + userName + ', lets get started..');

let score = 0;

let q1 = prompt('Do I eat Mansaf? (Answer with y/n or yes/no)');

q1 = q1.toLocaleLowerCase();

while(q1 !== 'y' && q1 !== 'n' && q1 !== 'yes' && q1 !== 'no'){
    q1 = prompt('Please answer with y/n or yes/no. Do I eat Mansaf?');
    q1 = q1.toLocaleLowerCase();
}

if (q1 === 'y' || q1 === 'yes') {
    //console.log(q1 + ' is correct');
    alert('Correct!');
    score = score + 1;
}
else {
    //console.log(q1 + ' is incorrect');
    alert('Incorrect!');
}

let q2 = prompt('Am I married? (Answer with y/n or yes/no)');

q2 = q2.toLocaleLowerCase();

while(q2 !== 'y' && q2 !== 'n' && q2 !== 'yes' && q2 !== 'no'){
    q2 = prompt('Please answer with y/n or yes/no. Am I married?');
    q2 = q2.toLocaleLowerCase();
}

if (q2 === 'y' || q2 === 'yes') {
    //console.log(q2 + ' is incorrect');
    alert('Incorrect!');
}
else {
    //console.log(q2 + ' is correct');
    alert('Correct!');
    score = score + 1;
}


let q3 = prompt('Do I live in USA? (Answer with y/n or yes/no)');

q3 = q3.toLocaleLowerCase();

while(q3 !== 'y' && q3 !== 'n' && q3 !== 'yes' && q3 !== 'no'){
    q3 = prompt('Please answer with y/n or yes/no. Do I live in USA?');
    q3 = q3.toLocaleLowerCase();
}

if (q3 === 'y' || q3 === 'yes') {
    //console.log(q3 + ' is incorrect');
    alert('Incorrect!');
}
else {
    //console.log(q3 + ' is correct');
    alert('Correct!');
    score = score + 1;
}

let q4 = prompt('Am I a software-engineer? (Answer with y/n or yes/no)');

q4 = q4.toLocaleLowerCase();

while(q4 !== 'y' && q4 !== 'n' && q4 !== 'yes' && q4 !== 'no'){
    q4 = prompt('Please answer with y/n or yes/no. Am I a software-engineer?');
    q4 = q4.toLocaleLowerCase();
}

if (q4 === 'y' || q4 === 'yes') {
    //console.log(q4 + ' is correct');
    alert('Correct!');
    score = score + 1;
}
else {
    //console.log(q4 + ' is incorrect');
    alert('Incorrect!');
}

let q5 = prompt('Can you see me? (Answer with y/n or yes/no)');

q5 = q5.toLocaleLowerCase();

while(q5 !== 'y' && q5 !== 'n' && q5 !== 'yes' && q5 !== 'no'){
    q5 = prompt('Please answer with y/n or yes/no. Can you see me?');
    q5 = q5.toLocaleLowerCase();
}

if (q5 === 'y' || q5 === 'yes') {
    //console.log(q5 + ' is incorrect');
    alert('Incorrect! YOU CAN\'T SEE ME');
}
else {
    //console.log(q5 + ' is correct');
    alert('Correct! YOU CAN\'T SEE ME');
    score = score + 1;
}

alert('Ok ' + userName + ', your score is: ' + score);
