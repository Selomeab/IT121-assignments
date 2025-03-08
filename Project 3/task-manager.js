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

// Function to validate due date format (MM/DD/YYYY)
function validateDueDate(dueDate) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  return regex.test(dueDate);
}

// Function to add a new task with validation
function addTask() {
  let description = prompt("Enter task description:");
  
  if (!description) {
    alert("Task description cannot be empty.");
    return;
  }
  
  let priority = prompt("Enter priority (High, Medium, Low):");
  while (!["High", "Medium", "Low"].includes(priority)) {
    alert("Invalid priority. Please enter 'High', 'Medium', or 'Low'.");
    priority = prompt("Enter priority (High, Medium, Low):");
  }

  let dueDate = prompt("Enter due date (MM/DD/YYYY):");
  while (!validateDueDate(dueDate)) {
    alert("Invalid date format. Please enter the date in MM/DD/YYYY format.");
    dueDate = prompt("Enter due date (MM/DD/YYYY):");
  }

  tasks.push({ description, priority, dueDate });
  alert("Task added successfully!");
}

// Function to remove a task
function removeTask() {
  let taskNumber = parseInt(prompt("Enter the number of the task to remove:"));
  
  if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
    alert("Invalid task number.");
    return;
  }
  
  tasks.splice(taskNumber - 1, 1);
  alert("Task removed successfully.");

  // Re-index the tasks
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
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

  // Display remaining tasks after exiting
  let remainingTasks = formatTaskList();
  document.getElementById("output").innerText = remainingTasks ? remainingTasks : "No tasks available.";
}

// Start the program
main();
