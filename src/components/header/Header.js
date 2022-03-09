import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/img/logo.png';
import userPrev from '../../assets/img/user-logo.svg'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__container">
                       <Link to='/'><img src={logo} alt="Logo" className="header-logo" /></Link> 
                       <div className="header__user">
                            <img src={userPrev} alt="User Preview" className="header__prev"></img>  
                            <div className="header__name">Екатерина</div> 
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;