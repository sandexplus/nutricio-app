import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../login/Login";
import LoggedMenu from "../pages/LoggedMenu";
import LoggedTable from '../pages/LoggedTable'
import './App.scss'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/links" element={<LoggedMenu/>}/>
                    <Route path="/table" element={<LoggedTable/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;