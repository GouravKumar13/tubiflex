import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='max-w-screen-2xl grid grid-flow-col  h-screen '>
            <SideBar className={``} />
            <Outlet />
        </div>
    )
}

export default Body
