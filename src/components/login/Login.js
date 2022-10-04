import up from '../../pages/img/up.png'
import hhn from '../../pages/img/Hotelia horizontal negro.svg'
import { Link } from 'react-router-dom'
import './Login.css'
import Prologin from './loginpro'
function Loginp() {
    return (
        <body class="login">
        <div class="fm">
        <div class="img_l">
            <img src={hhn} alt="" class="logo_l"/>
        </div>
        <center><img src={up} alt="" class="up7"/></center>
        <div class="inp">
            <Prologin username='username'/>
        <input type="text"/><br/>
        <label for="">Contraseña</label><br/>
        <input type="password"/><br/><br/><br/>
        <Link to="/dashboard"><a href="dashboard.html"><input type="submit" value="Registrar" class="enviar"/></a></Link>
        <Link to="/registrar"><h6 class="plo">¿No tienes una cuenta?<a href="Registrar.html">Registrate aquí</a></h6>  </Link> 
    </div>
    <div class="regresar">
        <Link to="/"><a class="rg" href="index.html">Regresar</a></Link>
    </div>
    </div>
    </body>
);
}

export default Loginp;