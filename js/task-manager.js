// Declare a global array to keep track of the tasks 10.12.2026
let myTakss = []


// Create function weeklyGoal 
function weeklyGoal(userName, dailyGoal, bonusTasks){
    // Calculate weekly goal based on number of workdays (5) per week
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        let totalGoal = weeklyGoal  + bonusTasks; 

        // Create and assign string variables to output 
        let output = "";
        output += "User: " + userName + "<br>"
        output += "Total Weekly Goal: " + totalGoal + "<br>";

        // Assign the goal-message div item to the output value
        document.getElementById("goal-message").innerHTML = output;

}

// Create goal-btn EventListener
// Target the goal-btn element
const goalButton = document.getElementById("goal-btn"); 
// Add the event Listener to the goal-btn element 
goalButton.addEventListener("click", eventFunction)
// Create eventFunction to call weeklyGoal function
function eventFunction(event) {
    // Use preventDefault to prevent form submission
    event.preventDefault();

    // Get appropriate values from the input fields
    let userName = document.getElementById("userName").value;
    let dailyGoal = Number(document.getElementById("dailyGoal").value);
    let bonusTasks = Number(document.getElementById("bonusTasks").value);

    // Call weeklyGoal function with the input values
    weeklyGoal(userName, dailyGoal, bonusTasks);
}

// Update task-manager logic 10.12.26 
// Create a new unordered list element 
const unordered = document.createElement('ul');  
// Assign an ID and append 
unordered.id =  "user-tasks";
// Append to the task-list div by first targeting the task-list div 
const tasks = document.getElementById("task-list");
// Now append 
unordered.appendChild(unordered);

// Adding click event on add-task button 
const addtaskButton = document.getElementById("add-task");
// Adding the event listener 
