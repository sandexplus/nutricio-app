import './Table.scss';
import download from '../../assets/img/file_download.svg';

const Table = () => {
    return (
        <>
            <div className="table">
                <div className="container">
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