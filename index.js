//checking the js file 
console.log("the file works")

//makinglkl the buttons for perentag
const cent5 = document.getElementById("5cent")
const cent10 = document.getElementById("10cent")
const cent15 = document.getElementById("15cent")
const cent25 = document.getElementById("25cent")
const cent50 = document.getElementById("50cent")
//the number of person call
const nPerson = document.getElementById("nPerson")
//the amount input call
const amount_input = document.getElementById("amount-input");

function tipCaculator(amount_input, tip) {
    amount_input = Number(amount_input);
    var totalAmount = amount_input + ((amount_input / 100) * tip)
    totalAmount = totalAmount.toFixed(2);
    return totalAmount
}
//making fuction for rendering the tip amount in to the right div
const tip_render = document.getElementById('tip-amount-person');
function displayTip(tip) {
    tip_render.innerHTML = `\$${tip}`
}
//making functio for displaying cost per [person]
const per_person = document.getElementById("tip-total-person");
function displayPerPerson(perPerson, amount) {
    let displayAmount = amount / perPerson;
    displayAmount = displayAmount.toFixed(2);
    per_person.innerHTML = `\$${displayAmount}`
}

//event listeners
cent5.addEventListener('click', () => {
    let tip = 10;
    const tip_amount = amount_input.value;
    const number_person = nPerson.value;
    const totalAmount = tipCaculator(tip_amount, tip);
    displayTip(totalAmount);
    if (number_person > 0) {
        displayPerPerson(number_person, totalAmount)
    }
    else {
        const error_span = document.getElementById('errorspan');
        error_span.innerText = "Cannot be this value"
        nPerson.style.border = "hsl(0, 46%, 54%)"
        nPerson.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
    }
})
cent10.addEventListener('click', () => {
    let tip = 10;
    const tip_amount = amount_input.value;
    const number_person = nPerson.value;
    const totalAmount = tipCaculator(tip_amount, tip);
    displayTip(totalAmount);
    if (number_person > 0) {
        displayPerPerson(number_person, totalAmount)
    }
    else {
        const error_span = document.getElementById('errorspan');
        error_span.innerText = "Cannot be this value"
        nPerson.style.border = "hsl(0, 46%, 54%)"
        nPerson.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
    }
})
cent15.addEventListener('click', () => {
    let tip = 10;
    const tip_amount = amount_input.value;
    const number_person = nPerson.value;
    const totalAmount = tipCaculator(tip_amount, tip);
    displayTip(totalAmount);
    if (number_person > 0) {
        displayPerPerson(number_person, totalAmount)
    }
    else {
        const error_span = document.getElementById('errorspan');
        error_span.innerText = "Cannot be this value"
        nPerson.style.border = "hsl(0, 46%, 54%)"
        nPerson.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
    }
})
cent25.addEventListener('click', () => {
    let tip = 10;
    const tip_amount = amount_input.value;
    const number_person = nPerson.value;
    const totalAmount = tipCaculator(tip_amount, tip);
    displayTip(totalAmount);
    if (number_person > 0) {
        displayPerPerson(number_person, totalAmount)
    }
    else {
        const error_span = document.getElementById('errorspan');
        error_span.innerText = "Cannot be this value"
        nPerson.style.border = "hsl(0, 46%, 54%)"
        nPerson.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
    }
})
cent50.addEventListener('click', () => {
    let tip = 10;
    const tip_amount = amount_input.value;
    const number_person = nPerson.value;
    const totalAmount = tipCaculator(tip_amount, tip);
    displayTip(totalAmount);
    if (number_person > 0) {
        displayPerPerson(number_person, totalAmount)
    }
    else {
        const error_span = document.getElementById('errorspan');
        error_span.innerText = "Cannot be this value"
        nPerson.style.border = "hsl(0, 46%, 54%)"
        nPerson.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
    }
})
//making the event listener for the custom tip
const custom_tip = document.getElementById("custom-tip");
custom_tip.addEventListener('focusout', () => {
    let tip = custom_tip.value;
    if (tip > 5) {
        const tip_amount = amount_input.value;
        const number_person = nPerson.value;
        const totalAmount = tipCaculator(tip_amount, tip);
        displayTip(totalAmount);
        if (number_person > 0) {
            displayPerPerson(number_person, totalAmount)
        }
        else {
            const error_span = document.getElementById('errorspan');
            error_span.innerText = "Cannot be this value"
            nPerson.style.border = "hsl(0, 46%, 54%)"
            nPerson.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
        }
    }
    else {
        document.getElementById('tip_error').innerHTML = "Should be greater than 5";
        custom_tip.style.border = "hsl(0, 46%, 54%)"
        custom_tip.style.boxShadow = "0px 0px 4px hsl(0, 46%, 54%)"
    }
})

//event listener for the reset button
const reset = document.getElementById('resets');
reset.addEventListener('click', () => {
    tip_render.innerHTML = "$0.00";
    per_person.innerHTML = "$0.00";
    nPerson.value = null;
    amount_input.value = null;
    custom_tip.value = null;
})