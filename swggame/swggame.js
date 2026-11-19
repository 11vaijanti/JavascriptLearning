
let userScore = 0;
let computerScore = 0;

function computerChoice() {

    let choices = ["snake", "water", "gun"];

    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playGame(userChoice) {

    let computer = computerChoice();

    if (userChoice === computer) {

        document.getElementById("result").innerHTML =
            "It's a Draw!";

    }

    else if (
        (userChoice === "snake" && computer === "gun") ||
        (userChoice === "water" && computer === "snake") ||
        (userChoice === "gun" && computer === "water")
    ) {

        userScore++;

        document.getElementById("result").innerHTML =
            "You Win!";

    }

    else {

        computerScore++;

        document.getElementById("result").innerHTML =
            "Computer Wins!";

    }

    document.getElementById("computerChoice").innerHTML =
        "Computer Choice: " + computer;

    document.getElementById("score").innerHTML =
        "Your Score: " + userScore +
        " | Computer Score: " + computerScore;
}

function resetGame() {

    userScore = 0;
    computerScore = 0;

    document.getElementById("result").innerHTML =
        "Make your choice!";

    document.getElementById("computerChoice").innerHTML =
        "Computer Choice: -";

    document.getElementById("score").innerHTML =
        "Your Score: 0 | Computer Score: 0";
}
