import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { GetService } from '../../actions/Service.action'
import logo from '../images/logo.png'

function Services(props) {

    //getdata
    useEffect(() => {
        props.GetAllService()
    }, [])

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
                                                <a href="#">Center</a>
                                                <ul>
                                                    <li><a href="news.html">Our History</a></li>
                                                    <li><a href="gallery.html">Our Team</a></li>
                                                </ul>
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
                {/* content begin */}
                <div className="no-bottom no-top" id="content">
                    <div id="top" />
                    {/* section begin */}
                    <section id="subheader" data-bgimage="url(images/background/5.png) bottom">
                        <div className="center-y relative text-center" data-scroll-speed={4}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2">
                                        <form action="blank.php" className="row" id="form_subscribe" method="post" name="myForm">
                                            <div className="col-md-12 text-center">
                                                <h1>Our Services</h1>
                                                <p>Awsome Page Teaser Here</p>
                                            </div>
                                            <div className="clearfix" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section close */}
                    <section className="no-top">
                        {props.createService.getData.length > 0 &&
                            <div className="container">
                                <div className="row" >
                                    {props.createService.getData.map(theData =>
                                        <div className="col-lg-4 col-md-6 mb30">
                                            <div className="feature-box f-boxed style-3" key={theData._id}>
                                                {/* <i className="bg-color i-circle fa fa-laptop">{}</i> */}
                                                <div onClick={() => window.open(`http://localhost:3001/service/${theData.image}`, "_blank")}>
                                                    <img style={{ cursor: 'pointer' }} src={`http://localhost:3001/service/${theData.image}`} alt='Image Not Found' />
                                                </div>
                                                <div className="text">
                                                    <h4>{theData.service_name}</h4>
                                                {theData.short_discription}
                                        </div>
                                                <i className="wm fa">
                                                    <img style={{ cursor: 'pointer' }} src={`http://localhost:3001/service/${theData.image}`} alt='Image Not Found' />
                                                </i>
                                            </div>
                                        </div>)}
                                </div>
                            </div>}
                    </section>
                    <section data-bgimage="url(images/background/7.png) center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2><span className="id-color">Call us</span> for further information. Bluetec customer care is here to help you <span className="id-color">anytime</span>. </h2>
                                    <p className="lead">We're available for 24 hours!</p>
                                </div>
                                <div className="col-md-6 text-lg-center text-sm-center">
                                    <div className="phone-num-big">
                                        <i className="fa fa-phone id-color" />
                                        <span className="pnb-text">
                                            Call Us Now
                                        </span>
                                        <span className="pnb-num">
                                            1 200 333 800
                                        </span>
                                    </div>
                                    <a href="#" className="btn-custom capsule med">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section-fun-facts" className="pt40 pb40 text-light bg-color-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={15425} data-speed={3000}>0</h3>
                                        <span>Website Powered</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={8745} data-speed={3000}>0</h3>
                                        <span>Clients Supported</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6" data-wow-delay=".5s">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={235} data-speed={3000}>0</h3>
                                        <span>Awards Winning</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={15} data-speed={3000}>0</h3>
                                        <span>Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* content close */}
                {/* footer begin */}
                <footer className="footer-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="widget">
                                    <a href="index.html"><img alt className="logo" src="images/logo-1.png" /></a>
                                    <div className="spacer-20" />
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="widget">
                                    <h5>Demo</h5>
                                    <ul>
                                        <li><a href="index.html">Saas</a></li>
                                        <li><a href="index-startup.html">Startup</a></li>
                                        <li><a href="index-coworking.html">Co-working</a></li>
                                        <li><a href="index-agency.html">Agency</a></li>
                                        <li><a href="index-apps.html">Apps</a></li>
                                        <li><a href="service-single.html">Email Marketing</a></li>
                                        <li><a href="pricing-plans.html">Pricing Plan</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="widget">
                                    <h5>Pages</h5>
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="our-team.html">Our Team</a></li>
                                        <li><a href="our-history.html">Our History</a></li>
                                        <li><a href="faq.html">FAQs</a></li>
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="login-2.html">Login</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget">
                                    <h5>Newsletter</h5>
                                    <p>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
                                    <form action="blank.php" className="row" id="form_subscribe" method="post" name="form_subscribe">
                                        <div className="col text-center">
                                            <input className="form-control" id="name_1" name="name_1" placeholder="enter your email" type="text" /> <a href="#" id="btn-submit"><i className="arrow_right" /></a>
                                            <div className="clearfix" />
                                        </div>
                                    </form>
                                    <div className="spacer-10" />
                                    <small>Your email is safe with us. We don't spam.</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 sm-text-center mb-sm-30">
                                <div className="mt10">© Copyright 2020 - Bluetec by Designesia</div>
                            </div>
                            <div className="col-md-6 text-md-right text-sm-left">
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook fa-lg" /></a>
                                    <a href="#"><i className="fa fa-twitter fa-lg" /></a>
                                    <a href="#"><i className="fa fa-linkedin fa-lg" /></a>
                                    <a href="#"><i className="fa fa-google-plus fa-lg" /></a>
                                    <a href="#"><i className="fa fa-rss fa-lg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Router>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        createService: store.createService
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllService: () => dispatch(GetService())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
