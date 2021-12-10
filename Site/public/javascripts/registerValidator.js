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

// validacion nombre
$('name').addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-name').innerText = "El nombre es requerido";
            this.classList.add('is-invalid');
            break;
        case (this.value.length < 2) :
            $('error-name').innerText = "El nombre debe tener como mínimo 2 carácteres";
            this.classList.add('is-invalid');
            break;
        case !regExLetras.test(this.value) :
            $('error-name').innerText = "El nombre no puede llevar números";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});
$('name').addEventListener('keydown', function() {
    this.classList = null;
    $('info-name').innerText = null;
})

// validacion apellido
$('lastname').addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-lastname').innerText = "El apellido es requerido";
            this.classList.add('is-invalid');
            break;
        case (this.value.length < 2) :
            $('error-lastname').innerText = "El apellido debe tener como mínimo 2 carácteres";
            this.classList.add('is-invalid');
            break;
        case !regExLetras.test(this.value) :
            $('error-lastname').innerText = "El apellido no puede llevar números";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-lastname').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});
$('lastname').addEventListener('keydown', function() {
    this.classList = null;
    $('info-lastname').innerText = null;
})

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
})

// validación contraseña
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

/* confirmar password */
$('rePassword').addEventListener('keyup', function() {
    if(this.value === $('password').value){
     console.log(this.value)
         this.classList.remove('is-invalid')
        this.classList.add('is-valid')
    }else{
     this.classList.remove('is-valid')
     $('error-rePassword').innerText = null;
    }
 });

 $('rePassword').addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-rePassword').innerText = "Debe confirmar su contraseña";
            this.classList.add('is-invalid')
            break;
        case this.value !== $('password').value :
            $('error-rePassword').innerText = "Las contraseñas no coinciden";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-rePassword').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
});





/* formulario.addEventListener('submit', e => {
    
    e.preventDefault();
    
    let error = false;
    const elementos = formulario.elements;
    
    for (let i = 0; i < elementos.length - 2; i++) {
        
        if(!elementos[i].value){
            elementos[i].classList.add('is-invalid');
            $('error-empty').innerText = "Los campos señalados son obligatorios";
            error = true;
        }
        
    }

    if(!terms.checked){
        terms.classList.add('is-invalid');
        $('error-terms').innerText = "Debes aceptar las bases y condiciones";
        error = true
    }

    if(!error){
        formulario.submit()
    }

}) */