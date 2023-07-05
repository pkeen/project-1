import CountdownTimer from './modules/countdownTimer.js';
import BlinkingCursor from './modules/blinkingCursor/blinkingCursor.js';
import Round from './modules/Round.js';
import welcome from './modules/blinkingCursor/welcome.js';

const wordList = ['hello', 'example', 'library', 'computer'];

let targetString = wordList[Math.floor(Math.random() * wordList.length)] // the string user has to type
let targetRegEx = new RegExp(targetString);
let userString = "";

let targetChar = 0; // used to track index of letter we are on
let userChar; // last typed char
let correctlyTyped = ""; // correctly typed so far string

let round;

let level = 0;

// DOM Elements
// const inputEl = document.querySelector('input');
// inputEl.style.display = 'none';
const mainEl = document.querySelector('main');
if (level === 0) {
  mainEl.append(welcome());
} else {
  const firstDiv = document.createElement('div');
  firstDiv.classList.add('game-section');
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('game-section');
  const thirdDiv = document.createElement('div');
  thirdDiv.classList.add('game-section');
  const timerDiv = document.getElementById('timer');
  mainEl.append(firstDiv, secondDiv, thirdDiv);
  firstDiv.append(timerDiv);
  // prompt element
  const typePromptEl = document.createElement('p');
  typePromptEl.innerHTML = `--- TYPE THE WORD BELOW ---`;
  secondDiv.append(typePromptEl);
  const targetEl = document.createElement("h1");
  targetEl.innerHTML = targetString;
  secondDiv.append(targetEl);
  const typingEl = document.createElement('div');
  typingEl.classList.add('typing');
  thirdDiv.append(typingEl);
  const typingText = document.createElement('h4');
  typingEl.append(typingText);
  const cursorDiv = document.createElement('div');
  typingEl.append(cursorDiv);
  const wellDoneEl = document.createElement('h3');
  wellDoneEl.innerHTML = 'Well done!';
  wellDoneEl.style.visibility = 'hidden';
  thirdDiv.append(wellDoneEl);

    // event listener for keyboard input
  document.addEventListener("keydown", (event) => {
    userChar = event.key;
    userString += userChar;
    // logic for displaying so far correctly typed
    if (userChar === targetString[targetChar]) {
      correctlyTyped += userChar
      targetChar++;
    } else {
      correctlyTyped = "";
      targetChar = 0;
    }
    console.log(userString);
    render();
    testWinner();
    
  });

  // Test win logic
  const testWinner = () => {
    if (targetRegEx.test(userString)) {
      wellDoneEl.style.visibility = 'visible';
      timer.stop();
      newRound();
    }
  }

  // render the typing on screen
  const renderTyping = (correctlyTyped) => {
    // typingEl.innerHTML = userString; // simple
    typingText.innerHTML = correctlyTyped;
  }

  // render function
  const render = () => {
    renderTyping(correctlyTyped);
    // inputEl.focus();
  }

  const newRound = () => {
      round = new Round(wordList);
  }

  newRound();
  // Timer
  const timer = new CountdownTimer(1000, 10, timerDiv, () => console.log('end'));
  timer.init();
  timer.start();

  // cursor
  const cursor = new BlinkingCursor(400, cursorDiv);
  cursor.init();
  cursor.start();
}






