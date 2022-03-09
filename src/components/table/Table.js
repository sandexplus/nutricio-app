import { Link } from 'react-router-dom';

import './Table.scss';
import download from '../../assets/img/file_download.svg';
import arrow from '../../assets/img/left-arrow.svg';

const Table = () => {
    return (
        <>
            <div className="table">
                <div className="container">
                    <Link to='/links' className='table__back'><img src={arrow} alt="Arrow" /> Назад</Link>
                    <div className="table__supper-container">
                        <div className="table__title">Статистика изменений</div>
                        <a href="#" className="table__pdf">Скачать трекер <img src={download} alt="Download" /></a>
                    </div>    
                    <div className="table__grid">
                         
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;