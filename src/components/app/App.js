import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../login/Login";
import LoggedMenu from "../pages/LoggedMenu";
import LoggedTable from '../pages/LoggedTable';
import LoggedMethodic from "../pages/LoggedMethodic";
import LoggedTrainer from '../pages/LoggedTrainer';
import './App.scss'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/links" element={<LoggedMenu/>}/>
                    <Route path="/table" element={<LoggedTable/>}/>
                    <Route path="/methodic" element={<LoggedMethodic/>}/>
                    <Route path="/trainers" element={<LoggedTrainer/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;