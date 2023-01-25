import React, {useEffect} from 'react'
import './Home.css'


export default function Home({ showSidebar1 }) {
    useEffect(() => {
        showSidebar1()
    }, [])

    return (
        <div className='home'>
            Home Page
        </div>
    )
}
