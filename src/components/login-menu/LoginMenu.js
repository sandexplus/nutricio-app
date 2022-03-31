import { Link } from 'react-router-dom';

import './LoginMenu.scss';

const LoginMenu = () => {
    return (
        
        <div className="login-menu">
            <div className="container">
                <Link to="/" className='login-menu__back'>На главную</Link>
                <h1 className="login-menu__title">Введите ваш логин, чтобы войти</h1>
                <input type="text" className="login-menu__login" />
                <div className="login-menu__b">
                    <Link to="/links" className='login-menu__btn'>Войти</Link>
                </div>
            </div>
        </div>
        
    )
}

export default LoginMenu;