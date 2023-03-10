
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Sidebar from "./components/Sidebar";
import Notebook from './Containers/Notebook'
import Home from './Containers/Home';




export default function Router() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const showSidebar1 = () => setSidebar(false);
    const [loading, setLoading] = useState(true)

    return (
        <>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
            <Routes>
                <Route path='/' element={<Home showSidebar1={showSidebar1} />} />
                <Route path='/step1/:fileName' element={<Notebook showSidebar1={showSidebar1} setLoading={setLoading} loading={loading} />} />
            </Routes>
        </>

    )
}