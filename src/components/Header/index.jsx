import './header.css'
import { Link } from 'react-router-dom';
import logoStarWars from '../../../src/assets/logo-starwars.png';
import iconeDashboard from '../../../src/assets/dashboard.png';
import iconeSair from '../../../src/assets/menu-sair.png';

function Header(){
    return(
        <header>
            <div className='header-superior'>
                <Link to="/"><img src={logoStarWars} alt="Logo Star Wars" className='logo'/></Link>
                <Link to="/dashboard" className='dashboard'>
                    <img src={iconeDashboard} alt="Ícone de relógio"/>
                    <p>Dashboard</p>
                </Link>
            </div>
            <div className='header-inferior'>
                <img src={iconeSair} alt="Ícone de sair" />
            </div>
        </header>
    )
}

export default Header;