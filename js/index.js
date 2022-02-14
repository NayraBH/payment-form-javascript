const form = document.querySelector("form");
const card = document.querySelector("#card");
const cvc = document.querySelector("#cvc");
const amount = document.querySelector("#amount");
const username = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const pcode = document.querySelector("#pcode");
const creditcard = document.querySelector('#credit-card');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (card.value.length != 16) {
        showError(card, 'Must be 16 digits')
    } else if (isNaN(card.value)) {
        showError(card, 'Must be 16 numbers')
    } else {
        isOkay(card);
    }

    if (cvc.value.length != 3) {
        showError(cvc, 'Must be 3 digits')
    } else if (isNaN(cvc.value)) {
        showError(cvc, 'Must be 3 numbers')
    } else {
        isOkay(cvc);
    }

    if (amount.value === '') {
        showError(amount, 'Must introduce the amount')
    } else if (isNaN(amount.value)){
        showError(amount, 'Amount must be a number')
    } else if (amount.value < 0) {
        showError(amount, 'Amount must be greater than 0')
    } else {
        isOkay(amount);
    }
    
    if (username.value === '') {
        showError(username, 'Must introduce your name')
    } else {
        isOkay(username);
    }

    if (lastname.value === '') {
        showError(lastname, 'Must introduce your lastname')
    } else {
        isOkay(lastname);
    }

    if (city.value === '') {
        showError(city, 'Must introduce your city')
    } else {
        isOkay(city);
    }

    if (state.value === '') {
        showError(state, 'Must introduce your state')
    } else {
        isOkay(state);
    }

    if (pcode.value.length != 5) {
        showError(pcode, 'Must be 5 digits')
    } else if (isNaN(pcode.value)) {
        showError(pcode, 'Must be 5 numbers')
    } else {
        isOkay(pcode);
    }

    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
        showError(creditcard, 'Must select the type of your credit card');
    } else {
        isOkay(creditcard);
    }

})

const showError = (input, message) => {
    const formLabel = input.parentElement;
    const small = formLabel.querySelector("small");

    small.innerText = message;
    small.classList.remove('hidden');
    small.classList.add('d-flex');
    input.classList.add('input-error');
}

const isOkay = (input) => {
    const formLabel = input.parentElement;
    const small = formLabel.querySelector("small");

    if (input.classList.contains('input-error')) {
        input.classList.remove('input-error');
        small.classList.add('hidden');
        small.classList.remove('d-flex');
    }
}
