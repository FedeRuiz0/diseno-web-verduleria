//redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}


const loader = document.querySelector('.loader');

// select input
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(name != null){ //sign up page
        if(name.value.length < 3){
            showAlert('Nombre debe ser 3 letras o mas');
        } else if(!email.value.length){
            showAlert('ingrese su email');
        } else if(password.value.length < 8){
            showAlert('contraseña debe ser 8 letras o mas');
        } else if(!number.value.length){
            showAlert('ingrese su numero de telefono');
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('numero de telefono invalido');
        } else if(!tac){
            showAlert('acepte los terminos y condiciones');
        } else {
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
            })
        }
    } else{
        //login page
        if(!email.value.length || !password.value.length){
            showAlert('rellena todos los casillos');
        } else{
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value
            })
        }
    }
    });

    //send data function
    const sendData = (path, data) => {
        fetch(path, {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(data) 
        }).then((res) => res.json())
        .then(response => {
            processData(response);
        })
    }

    const processData = (data) => {
        loader.style.display = null;
        if(data.alert){
            showAlert(data.alert);
        } else if(data.name){
            //create Authtoken
            data.authToken = generateToken(data.email);
            sessionStorage.user = JSON.stringify(data);
            location.replace('/');
        }
    }

// Alert function

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
}, 3000);

}
