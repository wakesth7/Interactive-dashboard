// Metric Converter Tool
var INCH_TO_CM = 2.54;
var FOOT_TO_CM = 30.48;
var YARD_TO_M = 0.91;
var MILE_TO_KM = 1.61;
var CM_TO_INCH = 0.39;
var CM_TO_FOOT = 0.028;
var M_TO_YARD = 1.09;
var KM_TO_MILE = 0.62;

var initialValue = parseFloat(prompt('Enter the initial value:'));
var initialUnit = prompt('Enter the initial unit:');
var finalUnit = prompt('Enter the final unit:');

function complexUnitConversion(event) {
    // Use preventDefault() to prevent from submission 
    event.preventDefault();

    // Capture the values from the HTML number field 
    const initalInput = document.getElementById("initialValue").value; 
    const initialInputValue = parseFloat(initalInput); 

    // Get the selected index of the converstion type using document.getElementTagName()
    const conversionType = document.getElemetByTagName("select"); 
    // This will grab the first set of select elements in the HTML document which are FROM units
    const fromUnit = conversionType[0].selectedIndex;
    // This will grab the second set of select elements in the HTML document which are TO units
    const toUnit = conversionType[1].selectedIndex;

    // Using IF-ELSE statements, determine the conversion type and calculate the final value
    let finalValue;
    if (fromUnit === "inch" && toUnit === "centimeter") {
        finalValue = initialInputValue * INCH_TO_CM;
    } 
    else if (fromUnit === "foot" && toUnit === "centimeter") {
        finalValue = initialInputValue * FOOT_TO_CM;
    } 
    else if (fromUnit === "yard" && toUnit === "meter") {
        finalValue = initialInputValue * YARD_TO_M;
    } 
    else if (fromUnit === "mile" && toUnit === "kilometer") {
        finalValue = initialInputValue * MILE_TO_KM;
    } 
    else if (fromUnit === "centimeter" && toUnit === "inch") {
        finalValue = initialInputValue * CM_TO_INCH;
    } 
    else if (fromUnit === "centimeter" && toUnit === "foot") {
        finalValue = initialInputValue * CM_TO_FOOT;
    } 
    else if (fromUnit === "meter" && toUnit === "yard") {
        finalValue = initialInputValue * M_TO_YARD;
    }
    else{
        finalValue = initialInputValue * KM_TO_MILE;
    }

    // Display the final value in the HTML document
    document.getElementById("finalValue").innerHTML = {initialInputValue} + " " + {fromUnit} + is + {finalValue} + {finalUnit}; 
}

// Create goal-btn EventListener
// Target the goal-btn element
const button = document.getElementById("conversion-btn"); 
// Add the event Listener to the goal-btn element 
button.addEventListener("submit", eventFunction)
