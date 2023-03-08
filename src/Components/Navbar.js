import logo from '../Assets/Logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <Link to='/'><img className='logo' src={logo} alt="Seavalanche logo"/></Link>
                <div className='navbar-menu'>
                    <Link to='/Projects' className='navbar-menu-text'>Projects</Link>
                    <Link to='/Commissions' className='navbar-menu-text'>Commissions</Link>
                    <Link to='/About' className='navbar-menu-text'>About</Link>
                </div>
                <div className='navbar-func'>
                    <div className='navbar-func-text'>Dark Theme</div>
                    <div className='navbar-func-text'>EN / JP</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;