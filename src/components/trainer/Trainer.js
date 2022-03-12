import { useState } from 'react'

import './Trainer.scss'

const Trainer = () => {

    const [trains, setTrains] = useState([]);
    const [currentTrain, setCurrentTrain] = useState(0);

    const onSetTrain = (name = '', descr = '') => {
        setTrains([...trains, {name: name, descr: descr}]);
    }

    const onSetCurrentTrain = (trainNumber) => {
        setCurrentTrain(trainNumber)
    }

    const GetCurtainTrain = () => {
        return (
            <>
                <div className="trainer__name">
                    {trains[currentTrain].name}
                </div>
                <div className="trainer__descr">
                    {trains[currentTrain].descr}
                </div>
            </>
        )
    }

    const GetTrainBtns = () => {
        const btns = trains.length;
        const btnsArr = [];
        for (let i = 0; i < btns; i++){
            btnsArr.push(<button 
                key={i} 
                className='trainer__switch-train'
                onClick={() => onSetCurrentTrain(i)}>Тренировка {i + 1}</button>)
        }

        return btnsArr;
    }

    return (
        <>
            <div className="trainer">
                <div className="container">
                    <button onClick={() => onSetTrain(Math.random() * 51 - 25, Math.random() * 51 - 25)}>Add train</button>
                    <div className="trainer__btns-container">
                        {GetTrainBtns()}
                    </div>
                    <div className="trainer__train">
                        {trains.length > 0 ? GetCurtainTrain() : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trainer;