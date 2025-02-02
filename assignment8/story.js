// Ask for the player's name
playerName = prompt("What's your name?");
alert("Welcome, " + playerName + "! " + introText);

// First decision point: Which era to visit
let eraChoice = prompt(eraChoiceText + " (Type 'dinosaur' for Dinosaur Age, 'medieval' for Medieval Times, 'future' for the Future, or 'egypt' for Ancient Egypt)").toLowerCase();

if (eraChoice === "dinosaur") {
    // Dinosaur Age: Observe or intervene with the dinosaurs
    let dinosaurChoice = prompt(dinosaurText + " (Type 'observe' to watch or 'intervene' to protect the dinosaurs)").toLowerCase();
    if (dinosaurChoice === "intervene") {
        alert(dinosaurEnd1);  // Outcome 1: Change the dinosaur timeline
    } else if (dinosaurChoice === "observe") {
        alert(dinosaurEnd2);  // Outcome 2: Let history play out
    } else {
        alert("Invalid input. You decide to do nothing.");
    }
} else if (eraChoice === "medieval") {
    // Medieval Times: Stop or let the king be assassinated
    let medievalChoice = prompt(medievalText + " (Type 'stop' to stop the assassin or 'let' to let history unfold)").toLowerCase();
    if (medievalChoice === "stop") {
        alert(medievalEnd1);  // Outcome 1: Change medieval history
    } else if (medievalChoice === "let") {
        alert(medievalEnd2);  // Outcome 2: Let the king die
    } else {
        alert("Invalid input. You do nothing.");
    }
} else if (eraChoice === "future") {
    // The Future: Stop or let the crucial event happen
    let futureChoice = prompt(futureText + " (Type 'stop' to stop the event or 'let' to let it happen)").toLowerCase();
    if (futureChoice === "stop") {
        alert(futureEnd1);  // Outcome 1: Stop the event and change the future
    } else if (futureChoice === "let") {
        alert(futureEnd2);  // Outcome 2: Let the event unfold as planned
    } else {
        alert("Invalid input. You stand by and do nothing.");
    }
} else if (eraChoice === "egypt") {
    // Ancient Egypt: Interfere or let history unfold with the pyramids
    let egyptChoice = prompt(egyptText + " (Type 'interfere' to help the workers or 'let' to let history unfold)").toLowerCase();
    if (egyptChoice === "interfere") {
        alert(egyptEnd1);  // Outcome 1: Change Egypt's history
    } else if (egyptChoice === "let") {
        alert(egyptEnd2);  // Outcome 2: Let the pyramids be built as planned
    } else {
        alert("Invalid input. You do nothing.");
    }
} else {
    alert("Invalid choice. You’re stuck in time!");
}
