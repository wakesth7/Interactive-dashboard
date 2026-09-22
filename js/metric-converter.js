// Metric Converter Tool
var INCH_TO_CM = 2.54;
var FOOT_TO_CM = 30.48;
var YARD_TO_M = 0.91;
var MILE_TO_KM = 1.61;
var CM_TO_INCH = 0.39;
var CM_TO_FOOT = 0.028;
var M_TO_YARD = 1.09;
var KM_TO_MILE = 0.62;

function complexUnitConversion(event) {
    // Use preventDefault() to prevent form submission 
    event.preventDefault();

    // Capture the values from the HTML number field 
    const initialInput = document.getElementById("initialValue").value; 
    // Convert to numeric value
    const initialInputValue = parseFloat(initialInput); 

    // Get all the select elements from drop-down
    const conversionType = document.getElementsByTagName("select"); 
    // Have 2 different select elements with drop-down options
    const fromUnit = conversionType[0];
    const toUnit = conversionType[1];

    // Now get their index positions as 
    const fromUnitIndex = fromUnit.selectedIndex; 
    const toUnitIndex = toUnit.selectedIndex; 

    // From all options in the dropdown, based on their index, return the text values
    const fromUnitText = fromUnit.options[fromUnitIndex].innerHTML; 
    const toUnitText = toUnit.options[toUnitIndex].innerHTML; 

    let finalValue;
    
    if (fromUnitText === "inch" && toUnitText === "centimeter") {
        finalValue = initialInputValue * INCH_TO_CM;
    } 
    else if (fromUnitText === "foot" && toUnitText === "centimeter") {
        finalValue = initialInputValue * FOOT_TO_CM;
    } 
    else if (fromUnitText === "yard" && toUnitText === "meter") {
        finalValue = initialInputValue * YARD_TO_M;
    } 
    else if (fromUnitText === "mile" && toUnitText === "kilometer") {
        finalValue = initialInputValue * MILE_TO_KM;
    } 
    else if (fromUnitText === "centimeter" && toUnitText === "inch") {
        finalValue = initialInputValue * CM_TO_INCH;
    } 
    else if (fromUnitText === "centimeter" && toUnitText === "foot") {
        finalValue = initialInputValue * CM_TO_FOOT;
    } 
    else if (fromUnitText === "meter" && toUnitText === "yard") {
        finalValue = initialInputValue * M_TO_YARD;
    }
    else if (fromUnitText === "kilometer" && toUnitText === "mile") {
        finalValue = initialInputValue * KM_TO_MILE;
    }
    else if (fromUnitText === toUnitText){
        // if units are identical 
        finalValue = initialInputValue; 
    }
    else {
        // sanity check; if any unmatched combination are attempted, display an error message
        document.getElementById("conversion-message").innerHTML = "Invalid combination of unit conversion"; 
        return; 
    }

    // Display the final value in the HTML document
    document.getElementById("conversion-message").innerHTML = 
        initialInputValue + " " + fromUnitText + " is " + finalValue.toFixed(2) + " " + toUnitText;
}


// Create conversion-btn EventListener
// Target the convertion-btn element
const button = document.getElementById("conversion-btn"); 
// Add the event Listener to the goal-btn element 
button.addEventListener("click", complexUnitConversion)