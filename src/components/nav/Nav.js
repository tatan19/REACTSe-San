import { Link } from 'react-router-dom'
import logonav from '../../pages/img/Hotelia horizontal blanco.svg'
import './Nav.css'
function Nav() {
    return (
            <nav>
        <div class="logo">
            <img src={logonav} alt="" />
            <i class="fa-solid fa-bars" onclick="agrupar()"></i>
        </div>
        <div id="ocultar">
            <div class="navegacion">
            <a href="" class="item" >Inicio</a>
            <a href="" class="item">Ubicanos</a>
            <a href="" class="item">Opiniones </a>
            <hr class="navegacion-hr" noshade="" />
            <Link to="/login"><a href="login.html" class=""><button class="navbar-button"><i class="fa-solid fa-user"></i> Iniciar Sesión</button></a></Link>
        </div>
    </div>
    </nav>
);
}

export default Nav;