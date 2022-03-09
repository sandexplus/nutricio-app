import { Link } from 'react-router-dom';

import './Login.scss';
import instagram from '../../assets/img/instagram.svg'
import telegram from '../../assets/img/telegram.svg'

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="login__container">
                    <Link to="/links" className="login__login">Войти</Link>
                </div> 
                <div className="login__links-container">
                    <a href='#' className="login__link">
                        <img src={instagram} alt="Instagram" className="login__link-img" />
                    </a>
                    <a href='#' className="login__link">
                        <img src={telegram} alt="Telegram" className="login__link-img" />
                    </a>
                </div>   
                <div className="login__separator"></div>
            </div>
        </div>
    )
}

export default Login;