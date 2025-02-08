// Task Manager App using Arrays and Loops

let tasks = []; // Array to store tasks

// Function to display the menu
function displayMenu() {
  let menu = `
  \nTask Manager Menu:
  1. View all tasks
  2. Add a new task
  3. Remove a task
  4. Exit
  `;
  return menu;
}

// Function to view all tasks
function viewTasks() {
  if (tasks.length === 0) {
    alert("No tasks available.");
  } else {
    let taskList = "Tasks:\n";
    for (let i = 0; i < tasks.length; i++) {
      taskList += `${i + 1}. ${tasks[i]}\n`; // Display tasks with their index
    }
    alert(taskList);
  }
}

// Function to add a new task
function addTask() {
  let newTask = prompt("Enter the new task:");
  if (newTask) {
    tasks.push(newTask); // Add task to the array
    alert("Task added successfully!");
  } else {
    alert("Task cannot be empty.");
  }
}

// Function to remove a task
function removeTask() {
  let taskNumber = prompt("Enter the number of the task to remove:");
  taskNumber = parseInt(taskNumber);

  // Check if the task number is valid
  if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
    alert("Invalid task number.");
  } else {
    tasks.splice(taskNumber - 1, 1); // Remove the task from the array
    alert("Task removed successfully.");
  }
}

// Main program loop
function runProgram() {
  let continueRunning = true;

  while (continueRunning) {
    let choice = prompt(displayMenu()); // Display the menu to the user

    // Handle user choice
    switch (choice) {
      case "1":
        viewTasks();
        break;
      case "2":
        addTask();
        break;
      case "3":
        removeTask();
        break;
      case "4":
        continueRunning = false; // Exit the program
        alert("Exiting Task Manager. Goodbye!");
        break;
      default:
        alert("Invalid option. Please choose again.");
    }
  }
}

// Start the program
runProgram();
