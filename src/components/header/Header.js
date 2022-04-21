import { Link } from 'react-router-dom';
import { useFetch } from "use-http";
import { useEffect, useState } from 'react';

import './Header.scss';
import logo from '../../assets/img/logo.png';
import userPrev from '../../assets/img/user-logo.svg'

const Header = () => {

    const [users, setUsers] = useState([]);


    const _URL = 'http://localhost:3000';

    const { get, post, response, loading, error } = useFetch(_URL)

    const getDB = async () => {
        const initialDB = await get('/data');
        if (response.ok) setUsers(initialDB);
    }

    useEffect(() => {
        getDB();
    }, [])

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__container">
                       <Link to='/'><img src={logo} alt="Logo" className="header-logo" /></Link> 
                       <div className="header__user">
                            <img src={userPrev} alt="User Preview" className="header__prev"></img>  
                            <div className="header__name">{
                            users.map(item => {
                                if (item.login === localStorage.getItem('You.Course__login')) {
                                    return item.name;
                                }
                                return ''
                            })
                            }</div> 
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;