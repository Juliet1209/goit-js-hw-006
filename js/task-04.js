let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const funcDecrement = () => {
        counterValue = counterValue - 1;
        value.textContent = counterValue;
}

const funcIncrement = () => {
        counterValue = counterValue + 1;
        value.textContent = counterValue;
}

btnDecrement.addEventListener('click', funcDecrement);
btnIncrement.addEventListener('click', funcIncrement);