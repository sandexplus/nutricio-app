import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from 'use-http';
import { Navigate } from 'react-router-dom';
import './LoginMenu.scss';

const LoginMenu = (props) => {

    const [users, setUsers] = useState([]);
    const [input, setInput] = useState('');
    const [redirect, setRedirect] = useState(false);


    const _URL = 'http://localhost:3000';

    const { get, post, response, loading, error } = useFetch(_URL)

    const getDB = async () => {
        const initialDB = await get('/data');
        if (response.ok) setUsers(initialDB);
    }

    useEffect(() => {
        getDB();
        //console.log(users);
    }, [])

    const setLogin = (login) => {
        
        if (!users.length) {
            return;
        }
        users.forEach(user => {
            if (user.login === input) {
                localStorage.setItem('You.Course__login', login);
                setRedirect(true);
            }
        })
        
    }

    return (
        <div className="login-menu">
            <div className="container">
                {redirect ? (<Navigate push to="/links"/>) : null}
                <Link to="/" className='login-menu__back'>На главную</Link>
                <h1 className="login-menu__title">Введите ваш логин, чтобы войти</h1>
                <input type="text" className="login-menu__login" onChange={(e) => setInput(e.target.value)}/>
                <div className="login-menu__b">
                    <Link to={localStorage.getItem('You.Course__login') ? "/links" : '/login'} className='login-menu__btn' onClick={() => setLogin(input)}>Войти</Link>
                </div>
            </div>
        </div>
        
    )
}

export default LoginMenu;