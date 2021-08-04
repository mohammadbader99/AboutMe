'use strict';

alert('Welcome to my guessing game..');

let userName = prompt('What is your name?');

while (userName === '' || userName === null) {
    userName = prompt('Please enter your name..');
}

alert('Nice name ' + userName + ', lets get started..');

let q1 = 'Do I eat Mansaf? (Answer with y/n or yes/no)';
let q1Answer = ['yes', 'y'];

let q2 = 'Am I married? (Answer with y/n or yes/no)';
let q2Answer = ['no', 'n'];

let q3 = 'Do I live in USA? (Answer with y/n or yes/no)';
let q3Answer = ['no', 'n'];

let q4 = 'Am I a software-engineer? (Answer with y/n or yes/no)';
let q4Answer = ['yes', 'y'];

let q5 = 'Can you see me? (Answer with y/n or yes/no)';
let q5Answer = ['no', 'n'];

let q6 = 'How old are me? (Numbers only)';
let q6Answer = 23;

let q7 = 'Name something that has a yellow color?';
let q7Answer = ['sun', 'banana', 'lemon', 'spongebob'];

let score = 0;


//First 5 questions:

let questionsArray = [q1, q2, q3, q4, q5];
let answersArray = [q1Answer, q2Answer, q3Answer, q4Answer, q5Answer];
let flag = false;

for (let i = 0; i < questionsArray.length; i++) {

    let answer = prompt(questionsArray[i]);

    while (answer == null) {
        answer = prompt(questionsArray[i]);
    }

    answer = answer.toLowerCase();

    while(answer !== 'y' && answer !== 'n' && answer !== 'yes' && answer !== 'no'){
        answer = prompt(questionsArray[i]);
        answer = answer.toLowerCase();
    }

    flag = false;

    for (let j = 0; j < answersArray[i].length; j++) {
        if (answer === answersArray[i][j]) {
            flag = true;
        }
    }

    if (flag === true) {
        console.log(answer + ' is correct');
        alert('Correct!');
        score = score + 1;
    }
    else {
        console.log(answer + ' is incorrect');
        alert('Inorrect!');
    }
}

//End of the first 5 questions.

//Question 6:

let ageFlag = false;

for (let i = 0; i < 4; i++) {

    let age = Number(prompt(q6 + ' Attemp ' + (i+1) + ' of 4'));

    while (isNaN(age) || age == '' || age == null) {
        age = Number(prompt(q6 + ' Attemp ' + (i+1) + ' of 4'));
    }

    if (age === q6Answer) {
        console.log(age + ' is correct');
        alert('Correct!');
        score = score + 1;
        ageFlag = true;
        break;
    }
    else if (age > q6Answer) {
        if (i < 3) { //Just to avoid printing a hint after the use of the last attemp
            alert('Too high - Hint: (18 - 24)');
        }
    }
    else {
        if (i < 3) { //Just to avoid printing a hint after the use of the last attemp
            alert('Too low - Hint: (18 - 24)');
        }
    }
}

if (ageFlag === false) {
    alert('Sorry, but the correct answer was ' + q6Answer);
}

//End of question 6.

//Question 7:

let colorFlag = false;

for (let i = 0; i < 6; i++) {

    let color = prompt(q7 + ' Attemp ' + (i+1) + ' of 6');

    while (color === null || color === '') {
        color = prompt(q7 + ' Attemp ' + (i+1) + ' of 6');
    }

    color = color.toLowerCase();

    for (let j = 0; j < q7Answer.length; j++) {
        if (color === q7Answer[j]) {
            console.log(color + ' is correct');
            alert('Correct!');
            score = score + 1;
            colorFlag = true;
            alert('Here is all the possible answers for the question: (' + q7Answer + ')');
            break;
        }
    }

    if (colorFlag === false) {
        if (i < 5) { //Just to avoid printing a hint after the use of the last attemp
            alert('Incorrect, try again..');
        }
    }
    else {
        break;
    }
}

if (colorFlag === false) {
    alert('Sorry, but the correct answers were (' + q7Answer + ')');
}

//End of question 7.

alert('Ok ' + userName + ', your score is: ' + score + ' out of 7');
