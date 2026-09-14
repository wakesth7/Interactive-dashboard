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
const button = document.getElementById("goal-btn"); 
// Add the event Listener to the goal-btn element 
button.addEventListener("click", eventFunction)
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



