import logoN1 from '../../pages/img/tarjetas/p1.png'
import './CardsNos.css'

function Nosotros() {
    return (
        <section class="opinion">
    <div class="targets">
            <div class="image">
                <img src={logoN1} />

                <div>
                    <span class="name">Diego Rodriguez</span>
                <div class="estrellas">
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                </div>
                </div>
            </div>
            <div class="loremc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur
                doloribus totam quo quibusdam saepe assumenda ad voluptates dolor aliquam.
            </div>
    </div>
</section>
);
}
export default Nosotros;