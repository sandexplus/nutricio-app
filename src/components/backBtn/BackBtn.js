import { Link } from 'react-router-dom';

import './BackBtn.scss';
import arrow from '../../assets/img/left-arrow.svg';


const BackBtn = () => {
    return (
        <>
            <div className="container">
                <Link to='/links' className='back'><img src={arrow} alt="Arrow" /> Назад</Link>
            </div>
        </>
    )
}

export default BackBtn;