import React from 'react'
import { Link } from 'react-router-dom'
import logo from '.././assets/logo.png'
import './SideBar.css'
import { SidebarData } from './SideBarData';
import { IconContext } from 'react-icons'

export default function SideBar(){
    
    return(
        <>
        <IconContext.Provider value={{color: '#292D32'}}>
            <div className='sidebar'>
                <nav className='nav-menu'>
                    <img src={logo} className='nav-logo'/>
                    <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) =>{
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.route}>
                                        {item.icon}
                                        <span className='nav-icon-text'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
            </IconContext.Provider>
        </>
    )
}