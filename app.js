var max;

while (true) {
    max = prompt("Enter the maximum number you want");

    if (!isNaN(max) && parseInt(max) > 1) {
        max = parseInt(max);
        break;
    } else {
        alert("Please enter a valid number greater than 1 for the maximum.");
    }
}

var random = Math.floor(Math.random() * max) + 1;
var guess;

while (true) {
    guess = prompt("Guess the number between 1 and " + max + " (if you want to quit the game, enter 'quit')");

    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    guess = parseInt(guess);

    if (isNaN(guess)) {
        alert("Invalid input. Please enter a valid number.");
    } else if (guess === random) {
        console.log("Yes, you are right! " + random + " is correct.");
        break;
    } else if (guess > random) {
        alert("Hint: Your guess is larger.");
    } else if (guess < random) {
        alert("Hint: Your guess is smaller.");
    }
}