const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const changeOutput = (event) => {
    const { value } = event.currentTarget

    nameOutput.textContent = value === '' ? 'Anonymous' : value;
}

nameInput.addEventListener('input', changeOutput)