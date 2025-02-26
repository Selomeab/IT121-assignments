// Task Manager using Objects and Functions

let tasks = []; // Array to store task objects

// Function to display the menu
function displayMenu() {
  return `\nTask Manager Menu:\n  1. View all tasks\n  2. Add a new task\n  3. Remove a task\n  4. Exit`;
}

// Function to view all tasks
function viewTasks() {
  if (tasks.length === 0) {
    alert("No tasks available.");
  } else {
    let taskList = formatTaskList();
    alert(taskList);
  }
}

// Function to format task list for display
function formatTaskList() {
  let taskList = "Current Tasks:\n";
  tasks.forEach((task, index) => {
    taskList += `${index + 1}. [${task.priority}] ${task.description} (Due: ${task.dueDate})\n`;
  });
  return taskList;
}

// Function to add a new task
function addTask() {
  let description = prompt("Enter task description:");
  let priority = prompt("Enter priority (High, Medium, Low):");
  let dueDate = prompt("Enter due date (MM/DD/YYYY):");
  
  if (description && priority && dueDate) {
    tasks.push({ description, priority, dueDate });
    alert("Task added successfully!");
  } else {
    alert("All fields are required.");
  }
}

// Function to remove a task
function removeTask() {
  let taskNumber = parseInt(prompt("Enter the number of the task to remove:"));
  
  if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
    alert("Invalid task number.");
  } else {
    tasks.splice(taskNumber - 1, 1);
    alert("Task removed successfully.");
  }
}

// Main function to run the program
function main() {
  let continueRunning = true;

  while (continueRunning) {
    let choice = prompt(displayMenu());

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
        continueRunning = false;
        alert("Exiting Task Manager. Goodbye!");
        break;
      default:
        alert("Invalid option. Please choose again.");
    }
  }
}

// Start the program
main();
