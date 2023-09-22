import './usuario.css';
import { Link } from 'react-router-dom';
import fotoUsuario from '../../../src/assets/usuario.png'

function Usuario(){
    return(
        <Link to="/perfil" className='usuario'>
            <img src={fotoUsuario} alt="Foto do usuário" />
            <p>User</p>
        </Link>
    )
}

export default Usuario;