import React from 'react'
import { Link } from 'react-router-dom';
import Sidebardata, {  Psidebardata } from './SideNav/Sidebardata';
// import * as AiIcons from 'react-icons/ai';

function Nav() {
  let user = sessionStorage.user
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
      <Link className="navbar-brand" to="/home"><img src="img/logo.png" data-retina="true" alt="Image Not Found" width={163} height={36} /></Link>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className=' navbar-nav navbar-sidenav' id="exampleAccordion">

          {user === 'admin' && Sidebardata.map((item, index) => {
            return (
              <>
              <li key={index} className={item.cName, "nav-item"}>
                {/* <li key={index} className={item.cName, "nav-item"} style={{marginBottom:"22px"}}> */}
                <Link to={item.path} className="nav-link">
                  {item.icon}&nbsp;&nbsp;&nbsp;
                  <span className="nav-link-text" >{item.title}</span>
                </Link>
              </li>
              </>
            );
          })
          }

          {user === 'parent' && Psidebardata.map((item, index) => {
            return (
              <li key={index} className={item.cName, "nav-item "}>
                <Link to={item.path} className="nav-link">
                  {item.icon}
                  &nbsp;
                  <span className="nav-link-text">{item.title}</span>
                </Link>
              </li>
            );
          })
          }
          
        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler">
              <i className="fa fa-fw fa-angle-left" />
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/logout" className="nav-link" data-toggle="modal" data-target="#exampleModal">
              <i className="fa fa-fw fa-sign-out" />Logout</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Nav
