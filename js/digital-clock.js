function displayTimeDate(){
    
    // Create a date object 
    const date = new Date(); 
    // Return the date as a string 
    let text = date.toLocaleDateString(); 

    // Using date methods to obtain hours, minutes and second information 
    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds(); 

    // For detemining AM/PM
    let ampm = "AM";

    // Leading zeros for time values less than 10 using terniary operators
    hours = hours < 10 ? "0" + hours : hours; 
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    // Switch between AM and PM 
    if (hours > 12){
        ampm = "PM"; 
    }

    // Target the clock display div 
    const clockcontainer = document.getElementById("clock-face");
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm; 
    clockcontainer.innerHTML = "Current Time: " + time;  

    // Target the date display div 
    const datecontainer = document.getElementById("calendar-date"); 
    datecontainer.innerHTML = "Today's Date: " +  text; 


}

setInterval(displayTimeDate, 1000)