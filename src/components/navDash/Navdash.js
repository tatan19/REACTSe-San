import { Link } from 'react-router-dom'
import logonav from '../../pages/img/hotelia campana.svg'
import logonav2 from '../../pages/img/Hotelia horizontal blanco.svg'
import './Navd.css'
function Nav() {
    return (
        <div class="Lhotelia" >
        <div class="hcampana" >
            <img class="camp" src={logonav} alt="" />
        </div>
        <div class="imgLh">
            <img src={logonav2} width="150px" alt="" /><br /><br /><br />
            <h3 class="h3">Angie Vargas</h3>
            <p class="h3">angievarags2@gmail.com</p>
        </div>
        <div class="lista">
            <a href=""><i class="fa-solid fa-bed"></i>  Habitaciones</a>
            <a href=""><i class="fa-solid fa-bell"></i>   Reservas</a>
            <a href=""><i class="fa-solid fa-bell"></i>    Camas</a>
            <a href=""><i class="fa-solid fa-bed"></i>    Lamparas</a>
        </div>
        <div class="crsesion">
            <Link to="/login"><a href="login.html" class="linksesion"><i class="fa-solid fa-right-from-bracket"></i>     Cerrar Sesion</a></Link>
        </div>
        </div>
);
}

export default Nav;