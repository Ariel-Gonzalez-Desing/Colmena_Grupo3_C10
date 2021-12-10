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
const regExLetras = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/;
const regExExtension = /(.jpg|.jpeg|.png|.gif)$/i;
const regExNumber = /^[0-9]+$/;
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
        case (this.value.length < 10) :
            $('error-email').innerText = "El email debe tener como mínimo 10 carácteres";
            this.classList.add('is-invalid');
            break;
        case await emailVerify(this.value) :
            $('error-email').innerText = "El email ya está registrado!!";
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
            $('error-password').innerText = "La contraseña es requerida";
            this.classList.add('is-invalid')
            break;
        case !regExPassword.test(this.value) :
            $('error-password').innerText = "La contraseña puede llevar mayúsculas, minúsculas, números y caracteres especiales. de 8 a 16 caracteres";
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
