const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
         <a href="index.html"><img src="../img/frutas.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" placeholder="Buscar frutas, verduras">
                    <button class="search-btn">Search</button>
                </div>
                <a>
                <img src="../img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                <p class="account-info">Log in as, name</p>
                <button class="btn" id="user-btn">Log out</button>
                </div>
                </a>
                <a href="product.html"><img src="../img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Inicio</a></li>
            <li class="link-item"><a href="product.html" class="link">Productos</a></li>
            <li class="link-item"><a href="contact.html" class="link">Contacto</a></li>
        </ul>
    `
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //el usuario esta logeado
        popuptext.innerHTML = `iniciaste sesion como, ${user.name}`;
        actionBtn.innerHTML = 'cerrar sesion';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        //el usuario cierra sesion
        popuptext.innerHTML = 'Inicia sesion para ordenar';
        actionBtn.innerHTML = 'Iniciar sesion'
        actionBtn.addEventListener('click', () => {
            location.href = './login.html';
        })
    }
}
