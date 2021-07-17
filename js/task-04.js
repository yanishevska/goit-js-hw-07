const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementValue = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);
