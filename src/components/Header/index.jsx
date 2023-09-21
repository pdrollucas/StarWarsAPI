import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className='header-superior'>
                <Link to="/"><img src="../../../src/assets/logo-tiflux.png" alt="Logo Tiflux" className='logo'/></Link>
                <Link to="/dashboard" className='dashboard'>
                    <img src="../../../src/assets/dashboard.png" alt="Ícone de relógio"/>
                    <p>Dashboard</p>
                </Link>
            </div>
            <div className='header-inferior'>
                <img src="../../../src/assets/menu-sair.png" alt="Ícone de sair" />
            </div>
        </header>
    )
}

export default Header;