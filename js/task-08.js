
const onClickSubmit3 = (event) => { 
    event.preventDefault();   

    if (refs.form.elements.email.value !== '' && refs.form.elements.password.value !== '') {
        const formValues = {
            email: refs.form.elements.email.value,
            password: refs.form.elements.password.value,
        }

        event.currentTarget.reset();

        return console.log(formValues);
    }

    window.alert('Увага! Всі поля повинні бути заповнені!')
} 