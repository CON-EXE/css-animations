## Guessing Game

This is a game in which the user tries to guess a randomly generated number between a minimum and maximum number within a limited amount of guesses. The user is informed whether their answer is too low or too high and the game ends when if either the number is guessed correctly or all the guesses are used.  

This is pretty simple project made with basic HTML, CSS and JavaScript. The HTML consists of just an h1 with the title, an h2 for the feedback and a p to display the remaining guesses. Theres a text input to get the number thats validated on submission and two buttons, one to submit a guess and one to reset the game. The reset button is hidden by deflault. On load the game will automatically generate a random number and fill in the values from hard coded JS variables. The game is designed so that minium, maximum, and number of guesses can be changed and the game will still function normally. The user input is validated using a simple if else statement. If the guessed number is too high or too low the user is informed in the feedback header. Once either all guesses are used or the number is guessed correctly an appropriate message is displayed and the guess button is hidden and the resest button is made visible. When the reset button is clicked it is replaced with the guess button, a new number is generated, the guess count is reset and the game starts fresh.

The code used to randomize the number is a simple function:

```javascript 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

If anyone wanted to make a project like this it would be fairly easy to add features such as being able to input the min, max and guesses or keeping track of guessed numbers. It's a very easy project to make. 
#### In summary the key features are:
- Randomly generated number for every game.
- Validated input that informs the user if thier input was invalid.
- Informs the user if their guess is too high or too low.
- Ends the game when conditions are met and doesn't allow the user to input anything else.
- Reset button that restarts the game seamlessly without need to reload the page.