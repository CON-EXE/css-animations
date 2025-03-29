'use strict'

const min = 1;
const max = 20;
const guesses = 5;
let guessesRemaining = guesses;
let number = 0;

const feedback = document.querySelector('.feedback');
const guessDisplay = document.querySelector('.guess-display');
const input = document.querySelector('.player-input');
const guessBtn = document.querySelector('.guess');
const resetBtn = document.querySelector('.reset');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGuess() {
    let guess = parseInt(input.value);
    return guess;
}

function isValidGuess(guess) {
    if (guess >= min && guess <= max && Number.isInteger(guess)) {
        return true;
    } else {
        return false;
    }
}

function gameOver() {
    input.setAttribute('readonly', 'true');
    guessBtn.classList.add('hide');
    resetBtn.classList.remove('hide');
    if(guessesRemaining > 0) {
        feedback.innerText = `Correct! The number was ${number}`;
    } else {
        feedback.innerText = `Game over! The number was ${number}`;
    }
}

guessBtn.addEventListener('click', () => {
    let guess = getGuess()
    if (isValidGuess(guess)) {
        if (guess > number) {
            feedback.innerText = 'Too high';
            guessesRemaining--;
        } else if (guess < number) {
            feedback.innerText = 'Too low';
            guessesRemaining--;
        } else {
            feedback.innerText = 'Correct!'
            gameOver();
        }
    } else {
        feedback.innerText = `Enter a valid number between ${min} and ${max}`;
    }

    guessDisplay.innerText = `${guessesRemaining} guesses remaining`;

    if (guessesRemaining === 0) {
        feedback.innerText = `Game over! The number was ${number}`
        gameOver();
    }
    input.value = '';
    input.focus();
});

resetBtn.addEventListener('click', () => {
    resetBtn.classList.add('hide');
    guessBtn.classList.remove('hide');
    input.focus();
    input.removeAttribute('readonly');
    guessesRemaining = guesses;
    number = getRandomNumber(min, max);
    feedback.innerText = `Enter a number between ${min} and ${max}`;
    guessDisplay.innerText = `${guessesRemaining} guesses remaining`;
});

window.addEventListener('load', () => {
    number = getRandomNumber(min, max);
    feedback.innerText = `Enter a number between ${min} and ${max}`;
    guessDisplay.innerText = `${guessesRemaining} guesses remaining`;
    input.focus();
});