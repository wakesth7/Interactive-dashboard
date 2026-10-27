// For TASK MANAGER WEB APP 10.26.2026

//10.26.2026 [NOT CLEAR if this was supposed to added to existing or created new]
let tasksArray = []
// Initial taskID
let taskid = 1;

const webTaskForm = document.getElementById("webTaskForm");
const webTaskInput = document.getElementById("webTask");
const taskPrioritySelect = document.getElementById("taskPriority");
const taskImpCheckbox = document.getElementById("taskImp");
const clearListBtn = document.getElementById("clearListBtn");

// Form submission event listener 
webTaskForm.addEventListener("submit", function(event){
    event.preventDefault();
    //Call the function
    addTask(); 
}); 

// Clear button event listener
clearListBtn.addEventListener("click", function(){
    deleteTaskList(); 
});

//Create the function addTask()
function addTask(){
    const taskValue = webTaskInput.value; 
    const priorityValue = taskPrioritySelect.value; 
    const isImportantValue = taskImpCheckbox.checked; // for checkboxes and radio buttons 


    if (taskValue !== ""){
        // Create the task object container using object literal notation 
        const newTaskObject = {
            id:taskid++,
            name:taskValue,
            priority:priorityValue,
            isImportant:isImportantValue,
            isCompleted:false
        };

        // Push the object or add to the tasksArray 
        tasksArray.push(newTaskObject);

        // Console logging for adding tasks  
        console.log(JSON.stringify(tasksArray));

        // Reset the form values to default
        webTaskForm.reset();

        // Display the tasks 
        displayTask(); 

        }

        else {
        // Prompt the user to enter a valid tasks
            window.alert("Please enter a valid task"); 
        }
    }

// Function to mark individual task complete via its DOM mode 
function toggleTaskComplete(id){
    for (let i = 0; i < tasksArray.length; i++){
        if (tasksArray[i].id == id){ // if it matches taskID
            if (tasksArray[i].isCompleted === true){
                tasksArray[i].isCompleted = false; 
            }
            else {
                tasksArray[i].isCompleted = true;
            }
            break; 
        }
    }

    // Console logging 
    console.log(JSON.stringify(tasksArray));
    displayTask();

}

// Function to delete entire task list
function deleteTaskList(){
    tasksArray = []; 
    //Console logging for deleted task
    console.log(JSON.stringify(tasksArray));
    displayTask(); 

}

// Display function 
function displayTask(){

    // The visible area on the webpage where new data will be displayed 
    const taskListContainer = document.getElementById("dynamic-add-task");

    // Clear out the old nodes to avoid duplication
    taskListContainer.innerHTML = "";

    // Loop through the records to generate DOM nodes
    for (let i = 0; i < tasksArray.length; i++){
        const task = tasksArray[i]; 
    
        // Create a new div element for displaying the tasks 
        const taskNum = document.createElement("section"); 

        // Create text node dynamically
        const textNode = document.createElement("div");
        textNode.textContent = task.name; 

        // Priority status 
        textNode.textContent = `${task.name} [Priority: ${task.priority}]`;

        // Highlight important tasks in red 
        if (task.isImportant === true){
            textNode.style.color = "red"; 
        }

        // Apply strikethrough to completed
        if (task.isCompleted === true){
            textNode.style.textDecoration = "line-through";
        }

        // Create the interaction button DOM node 
        // This changes between complete and incomplete 
        const completeBtn = document.createElement("button");

        completeBtn.type = "button";
        if (task.isCompleted === true){
            completeBtn.textContent = "Mark Incomplete";
        }
        else {
            completeBtn.textContent="Mark Complete";
        }

        // Set up the click button 
        completeBtn.onclick = function(){
            toggleTaskComplete(task.id);
        }

        // Append to sectional layout 
        taskNum.appendChild(textNode);
        // Append the complete button create above to the display section 
        taskNum.appendChild(completeBtn);

        // Append to the display area on HTML
        taskListContainer.appendChild(taskNum);
    }

}// end of the displayTask 

