import { useState, useCallback } from 'react';
import Carousel from 'react-elastic-carousel'

import './Table.scss';
import download from '../../assets/img/file_download.svg';
import maneken from '../../assets/img/maneken.svg';
import MaskedInput from 'react-maskedinput';

const Table = () => {

    const [index, setIndex] = useState(1);
    const [table, setTable] = useState(1);

    const setFinishedIndex = (i) => {
        setIndex(i)
    }

    const next = () => {
        if (index < table - 1) setIndex(index + 1)
    }

    const previous = () => {
        if (index > 0) setIndex(index - 1)
    }

    const CreateTable = (rows = 7, cols = 6) => {
        const cells = rows * cols;

        const tableArr = [];
        for (let i = 0; i < cells; i++){
            tableArr.push(<MaskedInput key={`tableCell${i}`} mask={i > 5 ? "11,1\ см." : "11.11.1111"} className="table__table-item" placeholder=''/>);
        }

        const tablesArr = [];
        for (let i = 0; i < table; i++){
            tablesArr.push(
                <div key={i+42} className="table__table-grid">
                    {tableArr.map(item => item)}
                </div>
            );
        }

        return tablesArr;
    }

    

    return (
        <>
            <div className="table">
                <div className="container">
                    <div className="table__supper-container">
                        <div className="table__title">Статистика изменений</div>
                        <a href="#" className="table__pdf">Скачать трекер <img src={download} alt="Download" /></a>
                    </div> 
                    <button onClick={() => setTable(table => ++table)}>Click me</button>   
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
                        <Carousel 
                            itemsToShow={1}
                            renderPagination={({activePage}) => {
                                return <div className='table__pagination'>{activePage + 1}</div>
                            }}>
                            {CreateTable().map(item => item)}
                        </Carousel>
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