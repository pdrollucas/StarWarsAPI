import './usuario.css';
import { Link } from 'react-router-dom';

function Usuario(){
    return(
        <Link to="/perfil" className='usuario'>
            <img src="../../../src/assets/usuario.png" alt="Foto do usuário" />
            <p>User</p>
        </Link>
    )
}

export default Usuario;