// Put your JavaScript code in this file
// create a response variable with 6 initial responses 
let answers = ["Don't count on it!", 
                "That's the way!", 
                "Certainly",
                "Try again",
                "Not remotely possible",
                "Of course!!"
]

// Get the circle div element 
let circleElem = document.getElementById("circle")

function displayAnswer(){
    // Generate a random index 
    let randomIndex = Math.floor(Math.random() * answers.length);
    // Use the random index to generate a random answer
    let randomAnswers = answers[randomIndex]; 
    // Now set the display property
    circleElem.style.display = "inline-block"; // this helps the display pivot to the centre from the edge of the 8-ball
    // Attach the circle div's innerHTML property to randomAnswers variable
    circleElem.innerHTML = '<br><br><br>' + randomAnswers; 

}

// Get the ball and question elements
const eightBall = document.getElementById("ball");
const questionText = document.getElementById("question"); 
// EventListener part 
eightBall.addEventListener("mousedown", function(){
    // Get the question value
    const questionVal = questionText.value;

    // If the field is empty, display a promt 
    if (questionVal === "") {
        window.alert("Please enter a yes/no question")
    }

    // Else call the eventCaller function 
    else {
        displayAnswer(); 
    }
}); 

//  Bonus challenge: add a second button that will allow the user to add new Magic Eight Ball responses.

// Adding a button to listen to click event on the add new_response button
const newresponseClick = document.getElementById("new_response");
// Add the eventListener
newresponseClick.addEventListener("click", function(event){
    event.preventDefault(); 
    // Get the user response and add it to the global array 
    let userResponse = document.getElementById("response").value; 
    // Push or add it to the main answers above only if not empty
    if (userResponse !== ""){
        answers.push(userResponse); 
        // Display the added response to the console first
        document.getElementById("addresponse-message").innerHTML = "The newly added message is: " + userResponse; 
        
        // Display the current length of the array to the console 
        document.getElementById("total-message").innerHTML = "The total length of the array is " + answers.length; 
    }
    else {
        // Prompt the user to enter a valid response 
        window.alert("Please type a response"); 
    }
});

//Create another event listener using addEventListener() for the “click” event on the “reset” button, to set the “circle” display style to “none”.
const clickReset = document.getElementById("reset");
clickReset.addEventListener("click", function(){
    circleElem.style.display = "none";

    // Added from bonus section to remove the input text value 
    document.getElementById("response").value = ""; 
    
    // Added from bonus section to refresh the response display 
    document.getElementById("addresponse-message").innerHTML = "";
    document.getElementById("total-message").innerHTML = ""; 
    
});

