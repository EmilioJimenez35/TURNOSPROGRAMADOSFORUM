let form = document.getElementById('form');
let inputs = document.querySelectorAll('#form input');

let expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // letters numbers hyphens underscores 
    password: /^.{4,12}$/, // 4 to 12 digits.	
}
let fields = {
    user: false,
    password: false,
}
let validateForm = (e) => {
    switch (e.target.name) {
        case "user":
            validateField(expressions.user, e.target, 'user');
            break;
        case "password":
            validateField(expressions.password, e.target, 'password');
            break;
                }
}
let validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error-active');
        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error-active');
        fields[field] = false;
    }

}
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fields.user && fields.password) {
        form.reset();
        location.href = 'usuario.html'

        document.getElementById('form__message-successful').classList.add('form__message-successful-active');

        setTimeout(() => {
            document.getElementById('form__message-successful').classList.remove('form__message-successful-active');
        }, 4000);

        document.querySelectorAll('.form__group-correct').forEach((icon) => {
            icon.classList.remove('form__group-correct');
        });
    } else {
        document.getElementById('form__message').classList.add('form__message-active');

        setTimeout(() => {
            document.getElementById('form__message').classList.remove('form__message-active');
        }, 4000);
    }
});





