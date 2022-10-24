const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),   
}

const changeTextSize = (event) => {
    refs.span.style.fontSize = `${event.currentTarget.value}px`;
}

refs.input.addEventListener('input', changeTextSize)