import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Header() {
    return (
        <div>
            <Router>
                {/* header begin */}
                <header className="header-light transparent scroll-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-center header-col-left">
                                        {/* logo begin */}
                                        {/* logo begin */}
                                        <div id="logo">
                                            <Link to='/'>
                                                <img alt src={logo} style={{ height: '80px', width: '180px' }} />
                                            </Link>
                                        </div>
                                        {/* logo close */}
                                        {/* logo close */}
                                    </div>
                                    <div className="align-self-center ml-auto header-col-mid">
                                        {/* mainmenu begin */}
                                        <ul id="mainmenu">
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/aboutus">About Us</a>
                                            </li>
                                            <li>
                                                <a href="/services">Services</a>
                                            </li>
                                            <li>
                                                <a href="/albums">Album</a>
                                            </li>
                                            <li>
                                                <a href="/getteams">Our Team</a>
                                            </li>
                                            <li>
                                                <a href="/contactus">Contact Us</a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                    <div className="align-self-center ml-auto header-col-right">
                                        <a href='/main' className="btn-custom" ><i className="fa fa-sign-in" /> Login</a>
                                        <span id="menu-btn" />
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* header close */}
            </Router>
        </div>
    )
}

export default Header
