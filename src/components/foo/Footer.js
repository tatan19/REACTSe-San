import './Footer.css'
function Footer() {
    return (
<footer>
    <p class="loremft">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        voluptatem labore
        maxime aliquam facilis illo enim obcaecati beatae veniam earum!</p>
    <hr />
    <div class="contactos">
        <div class="ubicacion">
            <i class="fa-solid fa-location-dot"></i>
            <p>
                Avenida carrera 8, #12A-42, Bogotá DC,<br />Colombia
            </p>
        </div>
        <div class="telefono">
            <a><i class="fa-solid fa-phone" ></i>  +57 601 4567899
            </a>
        </div>
    </div>
    <hr />
    <div class="politicaPadre">
        <p class="politicasypv">
            Politicas de privacidad
        </p>
        <p>
            Politicas de privacidad
        </p>
    </div>
    <hr />
    <div class="redes-sociales">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
    </div>
</footer>
);
}
export default Footer;