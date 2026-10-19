const interestRate = 0.0575; 

// Eventlistener 

const clickButton = document.getElementById("Button1")

clickButton.addEventListener("click", function(event){

    event.preventDefault();

    let loan = parseFloat(document.getElementById("loanAmount").value)

    let termYears = parseFloat(document.getElementById("time").value)

    // alert if the termYears is not 15 or 30 years
    if (termYears === 15 || termYears === 30) {


        const payment = parseFloat((((interestRate / 12) * loan) / (1 - Math.pow(1 + (interestRate / 12), (termYears* -12)))).toFixed(2));

        let totalInterest = (payment * termYears * 12) - loan; 

        let totMortgage = loan + totalInterest; 

        // Display the mortgage terms in years to the user 
        document.getElementById("mortgageTerm").innerHTML = `Mortgage Term: ${termYears} years`;
        document.getElementById("mortgageIntRate").innerHTML = `Mortgage Interest Rate: 5.75%`; 
        document.getElementById("totmortgage").innerHTML = `Total Mortgage Amount: $${totMortgage.toFixed(2)}`; 
        document.getElementById("totIntAmount").innerHTML = `Total Interest Amount: $${totalInterest.toFixed(2)}`; 
        document.getElementById("monthlyPay").innerHTML = `Total Monthly Amount: $${payment.toFixed(2)}`; 

        let bal = totMortgage;

        for (let month = 1; month <= termYears * 12; month++){
            bal -= payment; 

            document.getElementById("monthly").innerHTML = `Monthly Payment: ${bal.toFixed(2)};`

            

            if (bal === 0){
                document.getElementById("endBal").innerHTML = "This is ending Amortization Calculator"; 
                break; 
            }
    }

    }


    // If not valid years input 
    else {
        alert("The loan term must be 15 or 30 years")
    }

});