const secret = Math.floor(Math.random() * 20) + 1;

while (true) {
    let guess = prompt("Please guess the secret number (1-20)");

    if (guess === null) {
        alert("Game canceled. The secret number was " + secret);
        break;
    }

    guess = parseInt(guess);

    if (guess === secret) {
        alert("Correct Guess!");
        break;
    } else if (guess < secret) {
        alert("Incorrect, too low");
    } else if (guess > secret) {
        alert("Incorrect, too high");
    } else {
        alert("Invalid input. Please enter a number.");
    }
}



