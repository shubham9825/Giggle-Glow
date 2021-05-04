import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import './Navbar.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData, { Psidebardata } from './Sidebardata'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  let user = sessionStorage.user

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}   />
          </Link> */}
           
          {sidebar ?  <Link to='#' className='menu-bars'>
               <AiIcons.AiOutlineClose onClick={showSidebar} />
             </Link> 
               : 
               <Link to='#' className='menu-bars'>
               <FaIcons.FaBars onClick={showSidebar}   />
             </Link>
               }
        </div>
      
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar} >
            
            { user==='admin' && SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })
            }  

          { user==='parent' && Psidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
