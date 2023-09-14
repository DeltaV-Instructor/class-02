'use strict';

console.log('connected!');

let points = 0;
console.log('Users Points: ' + points);


function questionOne(){
  let userAnswer1 = prompt('Am I under the age of 25? Please respond with yes or no!');

  // console.log(userAnswer1);

  let cleanUserAnswer1 = userAnswer1.trim().toLowerCase();

  console.log('Clean Input: ', cleanUserAnswer1);

  if (cleanUserAnswer1 === 'yes' || cleanUserAnswer1 === 'y') {
  // console.log('You Are Correct!');
    alert('you are right!');
    points = points + 1;
  } else {
  // console.log('You Are Wrong!');
    alert('Wrong');
  }
}
questionOne();



let userAnswer2 = prompt('Do I want to be a professional Basketball Player? Please respond with yes or no!');

// console.log(userAnswer2);

let cleanUserAnswer2 = userAnswer2.trim().toLowerCase();

console.log('Clean Input: ', cleanUserAnswer2);

if (cleanUserAnswer2 === 'yes' || cleanUserAnswer2 === 'y') {
  // console.log('You Are Wrong!');
  alert('Wrong');
} else {
  // console.log('You Are Correct!');
  alert('you are right!');
  points = points + 1;
}




let userAnswer3 = prompt('Do I like to go to the gym? Please respond with yes or no!');

// console.log(userAnswer3);

let cleanUserAnswer3 = userAnswer3.trim().toLowerCase();

console.log('Clean Input: ', cleanUserAnswer3);

if (cleanUserAnswer3 === 'yes' || cleanUserAnswer3 === 'y') {
  // console.log('You Are Correct!');
  points = points + 1;
  alert('you are right!');
} else {
  // console.log('You Are Wrong!');
  alert('Wrong');
}


let userAnswer4 = prompt('I used to work at NASA? Please respond with yes or no!');

// console.log(userAnswer4);

let cleanUserAnswer4 = userAnswer4.trim().toLowerCase();

console.log('Clean Input: ', cleanUserAnswer4);

if (cleanUserAnswer4 === 'yes' || cleanUserAnswer4 === 'y') {
  // console.log('You Are Wrong!');
  alert('Wrong');
} else {
  // console.log('You Are Correct!');
  alert('you are right!');
  points = points + 1;
}

let userAnswer5 = prompt('I used to work at Olive Garden? Please respond with yes or no!');

// console.log(userAnswer5);

let cleanUserAnswer5 = userAnswer5.trim().toLowerCase();

console.log('Clean Input: ', cleanUserAnswer5);

if (cleanUserAnswer5 === 'yes' || cleanUserAnswer5 === 'y') {
  // console.log('You Are Correct!');
  points = points + 1;
  alert('you are right!');
} else {
  // console.log('You Are Wrong!');
  alert('Wrong');
}

alert('Guessing game time!');


let maxAttempts = 4;

for (let attempt = 0; attempt < maxAttempts; attempt++) {
  let guess = prompt('Enter a guess between 1-10');
  guess = parseInt(guess);
  console.log(guess);
  if (guess === 7) {
    alert('You guessed the secret number!');
    points = points + 1;
    break;
  } else if (guess < 7) {
    alert('Too low');
  } else if (guess > 7) {
    alert('Too high');
  } else {
    alert('Invalid Input');
  }
}

let maxAttempts2 = 6;

let answers = ['football','tennis','volleyball'];

alert('What sport did I play?');

for (let attempt = 0; attempt < maxAttempts2; attempt++) {
  let guess2 = prompt('Guess the correct answer');
  console.log(guess2);
  if (answers.includes(guess2)) {
    alert('You guessed the answer!');
    points = points + 1;
    break;
  } else {
    alert('Try again!');
  }
}












console.log('Users Points: ' + points);

let maxPoints = 7;

alert('You scored: ' + points + ' Out of ' + maxPoints + ' Points');
