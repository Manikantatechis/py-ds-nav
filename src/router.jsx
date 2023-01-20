
import React, { useState } from 'react'
import Py1a from './1a'
import Py1b from './1b'
import Py1c from './1c'
import App from './App'
import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";




export default function Router() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const showSidebar1 = () => setSidebar(false);

    return (
        <>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
            <Routes>
                <Route path="/overview" element={<Overview />} />
                <Route path="/step1/:fileName" element={<Py1a showSidebar1={showSidebar1} />} />
                <Route path="/reports/reports1" element={<ReportsOne />} />
                <Route path="/reports/reports2" element={<ReportsTwo />} />
                <Route path="/reports/reports3" element={<ReportsThree />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </>

    )
}