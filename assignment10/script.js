// When the button is clicked, change the text inside the <p> with id="message"
document.getElementById("messageBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "You just clicked the button!";
});

// When a user types in the input field, display the typed text inside the <p> with id="textOutput"
document.getElementById("textInput").addEventListener("input", function() {
    document.getElementById("textOutput").textContent = this.value;
});

// When the mouse hovers over the <div>, change its background color to green
document.getElementById("colorBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

// When the mouse moves away, change it back to light blue
document.getElementById("colorBox").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
});
