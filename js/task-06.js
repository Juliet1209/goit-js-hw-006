const refs = {
    input: document.querySelector('#validation-input'),
    dataLength: document.querySelector('#validation-input').getAttribute('data-length'),
}

const checkInput = event => {
  if (Number(refs.dataLength) === refs.input.value.length) {
    refs.input.classList.add('valid');
  } else {
    refs.input.classList.add('invalid');
  }

  if (
    Number(refs.dataLength) === refs.input.value.length &&
    refs.input.classList.contains('invalid')
  ) {
    refs.input.classList.replace('invalid', 'valid');
  } else {
    refs.input.classList.replace('valid', 'invalid');
  }
};

refs.input.addEventListener('blur', checkInput);