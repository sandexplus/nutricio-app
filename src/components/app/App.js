import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import { useFetch } from "use-http";

import Login from "../login/Login";
import LoggedMenu from "../pages/LoggedMenu";
import LoggedTable from '../pages/LoggedTable';
import LoggedMethodic from "../pages/LoggedMethodic";
import LoggedTrainer from '../pages/LoggedTrainer';
import LoginMenu from "../login-menu/LoginMenu";
import './App.scss'
import Admin from "../admin/Admin";

const App = () => {

    const [users, setUsers] = useState([]);


    const _URL = 'http://localhost:3000';

    const { get, post, response, loading, error } = useFetch(_URL)

    const getDB = async () => {
        const initialDB = await get('/data');
        if (response.ok) setUsers(initialDB);
    }

    useEffect(() => {
        getDB();
        //console.log(users);
    }, [])

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login users={users.length ? users : null}/>}/>
                    <Route path="/login" element={<LoginMenu/>} users={users}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/links" element={<LoggedMenu/>}/>
                    <Route path="/table" element={<LoggedTable users={users}/>}/>
                    <Route path="/methodic" element={<LoggedMethodic/>}/>
                    <Route path="/trainers" element={<LoggedTrainer/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;