import {calculateCashback} from "./cb.js";

const amountEl = document.getElementById('amount');
const amountEl2 = document.getElementById('amount2');
const amountEl3 = document.getElementById('amount3');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const amount = amountEl.value;
    const amount2 = amountEl2.value;
    const amount3 = amountEl3.value;
    if (isNaN(amountEl.value) || (isNaN(amountEl2.value)) || (isNaN(amountEl3.value))) {
        resultEl.textContent = "Вы не ввели сумму в одно из полей";
    }
    else {
        return resultEl.textContent = calculateCashback(amount, amount2, amount3) + " руб";
    }
}

calculateEl.addEventListener('click', reactToClick);