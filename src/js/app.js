import {calculateCashback} from "./cb.js";

const amountEl = document.getElementById('amount');
const amountEl2 = document.getElementById('amount2');
const amountEl3 = document.getElementById('amount3');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick() {
    const amount = [parseInt(amountEl.value), parseInt(amountEl2.value), parseInt(amountEl3.value)];
    resultEl.textContent = calculateCashback(amount) + 'руб';
    // if (isNaN(amount)) {
    //     resultEl.textContent = 'Вы не ввели сумму';
    // }
    // else {
    //     return amount;
    // }
}

calculateEl.addEventListener('click', reactToClick);