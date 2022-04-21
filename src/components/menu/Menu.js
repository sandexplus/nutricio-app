import { Link } from "react-router-dom";
import { useFetch } from "use-http";
import { useEffect, useState } from 'react';

import './Menu.scss';
import img1 from '../../assets/img/menu-img1.jpg';
import img2 from '../../assets/img/menu-img2.jpg';
import img3 from '../../assets/img/menu-img3.jpg';

const Menu = () => {

    const [users, setUsers] = useState([]);


    const _URL = 'http://localhost:3000';

    const { get, post, response, loading, error } = useFetch(_URL)

    const getDB = async () => {
        const initialDB = await get('/data');
        if (response.ok) setUsers(initialDB);
    }

    const postUser = async (login, name, role) => {
        await post('/data', {login: login, name: name, role: role, trains: [], table: []});
        if (response.ok) getDB();
    }

    const getUserRole = () => {
        let currentUserRole 
        users.forEach(item => {
            if (item.login === localStorage.getItem('You.Course__login')) {
                currentUserRole = item.role
            }
        })

        if (currentUserRole === 'admin') {
            return (
                <form action="post" className="menu__form">
                    <input type="text" className="menu__login" placeholder="Введите логин"/>
                    <input type="text" className="menu__name" placeholder="Введите имя"/>
                    <input type="checkbox" className="menu__role" />
                    <button onClick={(e) => {
                        e.preventDefault();
                        postUser(document.querySelector('.menu__login').value, 
                                 document.querySelector('.menu__name').value,
                                 document.querySelector('.menu__role').checked ? 'admin' : 'user')
                        document.querySelectorAll('input').forEach(item => {
                            item.value = '';
                            item.checked = false;
                        })
                        }} type="submit" className="menu__submit">Добавить пользователя</button>
                </form>
            )
        } else {
        }
    }

    useEffect(() => {
        getDB();
        //console.log(users);
    }, [])

    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className="menu__container">
                        <Link to='/table' className="menu__item">
                            <img src={img1} alt="" className="menu__img" />
                            <div className="menu__link">Трекеры</div>
                        </Link>
                        <Link to='/methodic' className="menu__item">
                            <img src={img2} alt="" className="menu__img" />
                            <div className="menu__link">Методичка</div>
                        </Link>
                        <Link to='/trainers' className="menu__item">
                            <img src={img3} alt="" className="menu__img" />
                            <div className="menu__link">Тренировки</div>
                        </Link>
                        
                    </div>
                    {users.length ? getUserRole() : null}
                </div>
            </div>
        </>
    )
}

export default Menu;