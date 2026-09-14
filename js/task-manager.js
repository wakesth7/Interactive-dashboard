// Create function weeklyGoal 
function weeklyGoal(userName, dailyGoal, bonusTasks){
    // Calculate weekly goal based on number of workdays (5) per week
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        let totalGoal = weeklyGoal  + bonusTasks; 

        // Create and assign string variables to output 
        let output = "";
        output += "User: " + userName + "\n";
        output += "Total Weekly Goal: " + totalGoal + "\n";

        // Assign the goal-message div item to the output value
        document.getElementById("goal-message").innerHTML = output;

}

// Create goal-btn EventListener
// Target the goal-btn element
const element = document.getElementById("goal-btnn"); 
// Add the event Listener to the goal-btn element 
element.addEventListener("click", eventFunction())
// Create eventFunction to call weeklyGoal function
function eventFunction() {
    // Get appropriate values from the input fields
    let userName = document.getElementById("user-name").value;
    let dailyGoal = document.getElementById("daily-goal").value;
    let bonusTasks = document.getElementById("bonus-tasks").value;

    // User preventDefault to prevent form submission
    event.preventDefault();

    // Call weeklyGoal function with the input values
    weeklyGoal(userName, dailyGoal, bonusTasks);
}



