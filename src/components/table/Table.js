import './Table.scss';
import download from '../../assets/img/file_download.svg';
import maneken from '../../assets/img/maneken.svg';
import MaskedInput from 'react-maskedinput';

const Table = () => {


    const CreateTable = (rows = 7, cols = 6) => {
        const cells = rows * cols;

        const table = [];
        for (let i = 0; i < cells; i++){
            table.push(<MaskedInput key={`tableCell${i}`} mask={i > 5 ? "11,1\ см." : "11.11.1111"} className="table__table-item" placeholder=''/>);
        }

        return table;
    }

    return (
        <>
            <div className="table">
                <div className="container">
                    <div className="table__supper-container">
                        <div className="table__title">Статистика изменений</div>
                        <a href="#" className="table__pdf">Скачать трекер <img src={download} alt="Download" /></a>
                    </div>    
                    <div className="table__table-container">
                        <div className="table__descr-grid">
                            <div className="table__descr-item">Дата</div>
                            <div className="table__descr-item">ОГ</div>
                            <div className="table__descr-item">ОТ</div>
                            <div className="table__descr-item">ОБ</div>
                            <div className="table__descr-item">ОБ<sub>1</sub></div>
                            <div className="table__descr-item">ОН</div>
                            <div className="table__descr-item">ОР</div>
                        </div>
                        <div className="table__table-grid">
                            {CreateTable().map(item => item)}   
                        </div>
                    </div>
                    <div className="table__subber-container">
                        <div className="table__item">
                            <div className="table__title">Параметры</div>
                            <div className="table__descr">
                                <p>Объём груди — самое выпуклое место в районе сосков</p>
                                <p>Объём талии — самое тонкое место в районе живота</p>
                                <p>Объём бёдер — самое широкое место на уровне ягодиц</p>
                                <p>Объём одного бедра  — на уровне чуть выше середины бедра</p>
                                <p>Объём ноги (икры) — на уровне самого широко места</p>
                                <p>Объём руки (бицепса) — на уровне чуть выше середины плеча</p>    
                            </div>
                        </div>
                        <div className="table__item">
                            <img src={maneken} alt="Maneken" className="table__img" />    
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;