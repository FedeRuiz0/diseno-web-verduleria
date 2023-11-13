const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `        <div class="footer-content">
    <img src="../img/frutas.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Categorias</li>
            <li><a href="#" class="footer-link">Frutas</a></li>
            <li><a href="#" class="footer-link">Verduras</a></li>
            <li><a href="#" class="footer-link">Nosotros</a></li>
            <li><a href="#" class="footer-link">Contacto</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Productos</li>
            <li><a href="#" class="footer-link">Manzanas</a></li>
            <li><a href="#" class="footer-link">Peras</a></li>
            <li><a href="#" class="footer-link">Naranjas</a></li>
            <li><a href="#" class="footer-link">Bananas</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">Sobre Nosotros</p>
    <p class="info">Empresa familiar creada en 1945. Siempre brindando la mejor calidad en nuestros productos.</p>
    <p class="info">email de soporte - ayuda@fruit.nl, atencionalcliente@fruit.nl</p>
    <p class="info">+34 654 567 890</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link"> terminos y condiciones</a>
            <a href="#" class="social-link"> pagina de privacidad</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Copyright © 2022 Fruit.nl - Te Mueves Por Emociones</p>

    `;
}

createFooter();