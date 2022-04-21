import { useState, useEffect } from 'react';
import { useFetch } from "use-http";

import './Trainer.scss'

const Trainer = () => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();


    const _URL = 'http://localhost:3000';

    const { get, post, response, put } = useFetch(_URL)

    const getDB = async () => {
        const initialDB = await get('/data');
        if (response.ok) {
            setUsers(initialDB);
            setCurrentUser(getCurrentUser(initialDB))    
            setTrains(getCurrentUser(initialDB).trains)    
        }
    }

    useEffect(() => {
        getDB();
    }, [])

    const [trains, setTrains] = useState([]);
    const [currentTrain, setCurrentTrain] = useState(0);

    const onSetTrain = async (e) => {
        e.preventDefault();
        const login = document.querySelector('.trainer__admin__login').value;
        const title = document.querySelector('.trainer__admin__title').value;
        const count = document.querySelector('.trainer__admin__count').value;
        const descr = document.querySelector('.trainer__admin__descr').value;
        const img = document.querySelector('.trainer__admin__img').value;
        let prevUserData;
        let index;
        users.forEach((item, i) => {
            if (item.login === login) {
                prevUserData = item;
                index = item.id;
            }
        })
        const trains = prevUserData.trains && Array.isArray(prevUserData.trains) ? prevUserData.trains : []
        trains.push({
            title: title,
            count: count,
            descr: descr,
            img: img
        });
        await put('/data/' + index, {login: prevUserData.login, name: prevUserData.name, role: prevUserData.role, trains: trains, table: prevUserData.table});
        window.location.reload();
        if (response.ok) setTrains(trains);
    }

    const onSetCurrentTrain = (trainNumber) => {
        setCurrentTrain(trainNumber)
    }

    const GetCurtainTrain = () => {
        if (!trains || !trains.length) {
            return ;
        }
        const res = trains.map((item, i) => {
            return (
                <>
                <div className="trainer__inner-container" key={Math.random()}>
                    <div className="trainer__block">
                        <div className="trainer__num">{i + 1 + '.'}</div>
                        <div className="trainer__train-title">{item.title}</div>
                        <div className="trainer__count">{item.count}</div>
                        <div className="trainer__attention">Обратить внимание:</div>
                        <div className="trainer__descr">{item.descr}</div>
                    </div>
                    <img src={item.img} alt="Img" className="trainer__img" />
                </div>
                </>
            )
        })
        return res;
    }

    const getCurrentUser = (data = users) => {
        let user 
        if (localStorage.getItem('You.Course__login')) {
            
            data.forEach(item => {
                if (item.login === localStorage.getItem('You.Course__login')) {
                    user = item;
                }
            })
            
        }
        return user;
    }

    const GetTrainBtns = () => {
        if (!trains || !trains.length) {
            return;
        }
        const btns = trains.length;
        const btnsArr = [];
        for (let i = 0; i < btns; i++){
            btnsArr.push(<button 
                key={i} 
                className={i === currentTrain ? `trainer__switch-train trainer__switch-train--active` : 'trainer__switch-train'}
                onClick={() => onSetCurrentTrain(i)}>Тренировка {i + 1}</button>)
        }

        return btnsArr;
    }

    const getAdminPanel = () => {
        return (
                <div className='trainer__admin'>
                    <label htmlFor="">Логин пользователя <input name="login" type="text" className="trainer__admin__login" /></label>
    
                    <div className="trainer__admin__train-container">
                        <label htmlFor="">Название тренировки <input name='title' type="text" className="trainer__admin__title" /></label>
                        
                        <label htmlFor="">Подходы <input name='count' type="text" className="trainer__admin__count" /></label>
                        
                        <label htmlFor="">Описание <input name='descr' type="text" className="trainer__admin__descr" /></label>
                        
                        <label htmlFor="">Ссылка на картинку (гифку) <input name='img' type="text" className="trainer__admin__img" /></label>
                        
                    </div>
                    <button className='trainer__admin__submit' 
                    onClick={onSetTrain}>
                        Add train</button>
                </div>
        )
    }

    return (
        <>
            <div className="trainer">
                <div className="container">
                    <h1 className="trainer__title">Тренировки</h1>
                    {currentUser && currentUser.role === 'admin' ? getAdminPanel() : null}
                    <div className="trainer__btns-container">
                        {GetTrainBtns()}
                    </div>
                    <div className="trainer__train">
                        {trains && trains.length ? GetCurtainTrain() : null}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Trainer;