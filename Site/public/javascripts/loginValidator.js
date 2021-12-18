console.log("linkeado");

const $ = id => document.getElementById(id);

const emailVerify = async email => {
    try {
        let response = await fetch('/api/get-emails?email=' + email)
        let result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

/* expresiones regulares */
const regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const regExPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/ 


// validacion email
$('email').addEventListener('blur', async function() {
    switch (true) {
        case !this.value :
            $('error-email').innerText = "El email es requerido";
            this.classList.add('is-invalid');
            break;
        case !regExEmail.test(this.value) :
                $('error-email').innerText = "Email inválido";
                this.classList.add('is-invalid');
            break; 
        default:
            $('error-email').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});
$('email').addEventListener('keydown', function() {
    this.classList = null;
    $('info-email').innerText = null;
});


//validación contraseña
$('password').addEventListener('keydown', function() {
    $('info-password').innerText = null;
})

$('password').addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-password').innerText = "Debes ingresar tu contraseña";
            this.classList.add('is-invalid')
            break;
        case !regExPassword.test(this.value) :
            $('error-password').innerText = "Debes ingresar una contraseña válida";
            this.classList.add('is-invalid'); 
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});
$('password').addEventListener('keydown', function() {
    this.classList = null;
    $('info-password').innerText = null;
})
