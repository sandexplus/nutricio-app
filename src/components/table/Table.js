import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import { useFetch } from "use-http";
import { useSwiper } from 'swiper/react';

import './Table.scss';
import download from '../../assets/img/file_download.svg';
import maneken from '../../assets/img/maneken.svg';
import MaskedInput from 'react-maskedinput';

const Table = () => {

    const [tableCount, setTableCount] = useState(1);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [table, setTable] = useState([]);
    const [currentCol, setCurrentCol] = useState(1);
    

    const _URL = 'http://localhost:3000';

    const { get, post, response, put } = useFetch(_URL)

    const getDB = async () => {
        const initialDB = await get('/data');
        if (response.ok) {
            setUsers(initialDB);
            setCurrentUser(getCurrentUser(initialDB))
        }
    }

    useEffect(() => {
        getDB();
    }, [])

    useEffect(() => {
        setTable(currentUser && currentUser.hasOwnProperty('table') ? currentUser.table : []);    
        setTableCount(getUserTable());
        setTableData()
    }, [currentUser, table, tableCount, currentCol])

    useEffect(() => {
        
    }, [table])

    const getUserTable = () => {
        if (!currentUser || table.length <= 6) {
            return 1;
        } else {
            if (table.length % 6 === 0) {
                return Math.ceil(table.length / 6) + 1;
            } else {
                return Math.ceil(table.length / 6);
            }
        }
        
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

    const setTableData = () => {
        if (!table.length) {
            return;
        }
        const cols = document.querySelectorAll('.table-col');
        cols.forEach((col, i) => {
            if (i < table.length) {
                const cells = col.querySelectorAll('.table__table-item');
                cells.forEach((cell, j) => {
                    cell.value = table[i][j];
                })
            }
        })

        sortTable();
    }

    const sortTable = () => {
        const cols = document.querySelectorAll('.table-col');
        cols.forEach((col, i) => {
            const cells = col.querySelectorAll('.table__table-item');
            cells.forEach(cell => {
                cell.disabled = true;
                if (i === table.length) {
                    cell.disabled = false;
                    setCurrentCol(i)
                }
            })
        })
    }

    const getSetData = async () => {
        const newDataArr = [];
        const col = document.querySelectorAll('.table-col')[currentCol].querySelectorAll('.table__table-item');
        col.forEach(cell => {
            newDataArr.push(cell.value);
        })
        setTable(table.push(newDataArr))
        await put('/data/' + currentUser.id, {
            login: currentUser.login, 
            name: currentUser.name, 
            role: currentUser.role, 
            trains: currentUser.trains, 
            table: table
        });
        if (response.ok) {
            setTable(currentUser && currentUser.hasOwnProperty('table') ? currentUser.table : []);    
            setTableCount(getUserTable());
            setTableData()
        }
    }

    const CreateTable = (rows = 7, cols = 6) => {
        const rowsArr = [];
        for (let j = 0; j < cols; j++) {
            const colsArr = [];
            for (let i = 0; i < rows; i++){
                colsArr.push(
                <MaskedInput 
                    key={`tableCell${i}`} 
                    mask={i === 6 ? "11.11.1111" : "11,1\ ????."} 
                    className="table__table-item" 
                    placeholder=''/>);
            }
            colsArr.reverse();
            rowsArr.push(
                <div className="table-col">
                    {colsArr.map(item => item)}
                </div>
            );
        }

        const tablesArr = [];
        for (let i = 0; i < tableCount; i++){
            tablesArr.push(
                <div key={i+42 * tableCount} className="table__table-grid">
                    {rowsArr.map(item => item)}
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
                        <div className="table__title">???????????????????? ??????????????????</div>
                        <a href="#" className="table__pdf">?????????????? ???????????? <img src={download} alt="Download" /></a>
                    </div>  
                    <div className="table__table-container">
                        <div className="table__descr-grid">
                            <div className="table__descr-item">????????</div>
                            <div className="table__descr-item">????</div>
                            <div className="table__descr-item">????</div>
                            <div className="table__descr-item">????</div>
                            <div className="table__descr-item">????<sub>1</sub></div>
                            <div className="table__descr-item">????</div>
                            <div className="table__descr-item">????</div>
                        </div>
                        <Carousel 
                            itemsToShow={1}
                            renderPagination={({activePage}) => {
                                return <div className='table__pagination'>{activePage + 1}</div>
                            }}>
                            {CreateTable().map(item => item)}
                        </Carousel>
                    </div>
                    <button className="table__add-fields" onClick={getSetData}>???????????????? ????????????</button>
                    <div className="table__subber-container">
                        <div className="table__item">
                            <div className="table__title">??????????????????</div>
                            <div className="table__descr">
                                <p>?????????? ?????????? ??? ?????????? ???????????????? ?????????? ?? ???????????? ????????????</p>
                                <p>?????????? ?????????? ??? ?????????? ???????????? ?????????? ?? ???????????? ????????????</p>
                                <p>?????????? ?????????? ??? ?????????? ?????????????? ?????????? ???? ???????????? ????????????</p>
                                <p>?????????? ???????????? ??????????  ??? ???? ???????????? ???????? ???????? ???????????????? ??????????</p>
                                <p>?????????? ???????? (????????) ??? ???? ???????????? ???????????? ???????????? ??????????</p>
                                <p>?????????? ???????? (??????????????) ??? ???? ???????????? ???????? ???????? ???????????????? ??????????</p>    
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