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
    // Third decision point: Choose to explore another part of the Dinosaur Age
    let thirdChoice = prompt("Do you want to explore more? (Type 'yes' to explore another location or 'no' to leave the Dinosaur Age)").toLowerCase();
    if (thirdChoice === "yes") {
        alert("You wander deeper into the jungle to discover new creatures and environments.");
        // Additional exploration logic here
    } else if (thirdChoice === "no") {
        alert("You decide it's time to leave the Dinosaur Age.");
    } else {
        alert("Invalid input. You decide to stay where you are.");
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
    // Third decision point: Choose to interact with a character or not
    let thirdChoice = prompt("Do you want to interact with a knight or explore the castle? (Type 'knight' for a knight or 'explore' to explore the castle)").toLowerCase();
    if (thirdChoice === "knight") {
        alert("You approach the knight for advice about the kingdom's future.");
        // Additional interaction logic with the knight
    } else if (thirdChoice === "explore") {
        alert("You wander the castle halls, uncovering hidden secrets and forgotten rooms.");
        // Additional exploration logic here
    } else {
        alert("Invalid input. You decide to do nothing.");
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
    // Third decision point: Choose to alter technology or time travel mode
    let thirdChoice = prompt("Do you want to upgrade your tech or change your time travel method? (Type 'upgrade' for tech or 'change' for time travel method)").toLowerCase();
    if (thirdChoice === "upgrade") {
        alert("You upgrade your technology to enhance your time travel experience.");
        // Additional logic for upgrading tech
    } else if (thirdChoice === "change") {
        alert("You decide to change your time travel method to something more advanced.");
        // Additional logic for changing the time travel method
    } else {
        alert("Invalid input. You choose to keep your current method.");
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
// Third decision point: Choose to explore the pyramids or interact with a Pharaoh
    let thirdChoice = prompt("Do you want to explore the pyramids or meet the Pharaoh? (Type 'explore' for the pyramids or 'pharaoh' to meet the Pharaoh)").toLowerCase();
    if (thirdChoice === "explore") {
        alert("You enter the Great Pyramid to discover its hidden chambers and mysteries.");
        // Additional exploration logic here
    } else if (thirdChoice === "pharaoh") {
        alert("You meet the Pharaoh and discuss the grand plans for Egypt's future.");
        // Additional interaction logic with the Pharaoh
    } else {
        alert("Invalid input. You decide to stay put.");
    }