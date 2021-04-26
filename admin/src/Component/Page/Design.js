import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../images/logo.png'
// import image7 from '../images/image7.jpg'

function Design() {
  return (
    <div id="wrapper">
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
                        <a href="#">Services</a>                        
                      </li>
                      <li>
                        <a href="#">Center</a>
                        <ul>
                          <li><a href="news.html">Our History</a></li>
                          <li><a href="gallery.html">Our Team</a></li>                        
                        </ul>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>                        
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
          <section data-bgimage="url(images/background/image9.jpg)" style={{backgroundPosition : "top center"}} className="full-height vertical-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                  <div style={{backgroundColor:'#12265A',margin:'10px 150px 5px 0px',padding:'10px 0px 1px 8px',borderRadius:'5px'}}>
                  <h5 style={{fontSize:'17px',color:'white',fontWeight:'bold'}}>WELCOME TO GIGGLE AND GROW !</h5>
                  </div>
                  <div className="spacer-20" />
                  <h2 style={{fontSize:'25px',color:'#0f141f',fontWeight:'bold'}} className="lead">Where QUALITY CHILDCARE matters!</h2>
                  <p className="lead" style={{color:'white'}}>While building on to the journey of &nbsp; 'Learning by Doing' . We continue to nurture young minds who will grow up to become responsible citizens.</p>
                  <div className="spacer-20" />
                  <a className="btn-custom" href="/aboutus">Read More</a>
                  <div className="mb-sm-30" />
                </div>
                {/* <div className="col-lg-6 offset-lg-1 wow fadeInLeft" data-wow-delay=".5s">
                  <img src={image7} className="img-fluid" alt />
                </div> */}
              </div>
            </div>
          </section>
          <section id="section-highlight" data-bgimage="url(images/background/2.png) top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="text-center">
                    <h2><span className="uptitle id-color">Our Services</span>How does it work?</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="spacer-20" />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* feature box begin */}
                <div className="col-lg-4 col-md-6 mb40 wow fadeInUp" data-wow-delay="0s">
                  <div className="feature-box f-boxed style-3">
                    <i className="bg-color i-circle fa fa-wordpress" />
                    <div className="text">
                      <a href="service-single.html"><h4>Website Design</h4></a>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </div>
                    <i className="wm fa fa-wordpress" />
                  </div>
                </div>
                {/* feature box close */}
                {/* feature box begin */}
                <div className="col-lg-4 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="feature-box f-boxed style-3">
                    <i className="bg-color-2 i-circle fa fa-paper-plane-o" />
                    <div className="text">
                      <a href="service-single.html"><h4>Email Marketing</h4></a>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </div>
                    <i className="wm fa fa-paper-plane-o" />
                  </div>
                </div>
                {/* feature box close */}
                {/* feature box begin */}
                <div className="col-lg-4 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="feature-box f-boxed style-3">
                    <i className="bg-color-3 i-circle fa fa-line-chart" />
                    <div className="text">
                      <a href="service-single.html"><h4>Digital Analytics</h4></a>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </div>
                    <i className="wm i-circle fa fa-line-chart" />
                  </div>
                </div>
                {/* feature box close */}
                <div className="col-md-12 text-center">
                  <a className="btn-custom" href="#">More Features</a>
                </div>
              </div>
            </div>
          </section>
          <section id="section-banner" className="no-top" data-bgimage="url(images/background/3.png) top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight" data-wow-delay="0s">
                  <img className="relative img-fluid" src="images/misc/5.png" alt />
                </div>
                <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay="0s">
                  <h2>
                    Data security with<br />
                    <span className="id-color">256-bit</span> encryption
            </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .
            </p>
                  <div className="spacer-half" />
                  <a className="btn-custom" href="#">Get Started</a>
                </div>
                <div className="spacer-double" />
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0s">
                  <div id="owl-logo" className="logo-carousel owl-carousel owl-theme">
                    <img src="images/logo-clients/1.png" className="img-fluid" alt />
                    <img src="images/logo-clients/2.png" className="img-fluid" alt />
                    <img src="images/logo-clients/3.png" className="img-fluid" alt />
                    <img src="images/logo-clients/4.png" className="img-fluid" alt />
                    <img src="images/logo-clients/5.png" className="img-fluid" alt />
                    <img src="images/logo-clients/6.png" className="img-fluid" alt />
                    <img src="images/logo-clients/7.png" className="img-fluid" alt />
                    <img src="images/logo-clients/8.png" className="img-fluid" alt />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="section-testimonial" data-bgimage="url(images/background/2.png)  top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                    <h2><span className="uptitle id-color">Testimonial</span>What They Says</h2>
                    <div className="spacer-20" />
                  </div>
                  <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/1.jpg" /> <span>John, Pixar Studio</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/2.jpg" /> <span>Sarah, Microsoft</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/3.jpg" /> <span>Michael, Apple</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/4.jpg" /> <span>Thomas, Samsung</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/1.jpg" /> <span>John, Pixar Studio</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/2.jpg" /> <span>Sarah, Microsoft</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/3.jpg" /> <span>Michael, Apple</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Great support, like i have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
                          <div className="de_testi_by"><img alt className="rounded-circle" src="images/people/4.jpg" /> <span>Thomas, Samsung</span></div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="section-fun-facts" className="pt60 pb60 text-light bg-color-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0s">
                  <div className="de_count">
                    <h3 className="timer" data-to={15425} data-speed={3000}>0</h3>
                    <span>Website Powered</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".25s">
                  <div className="de_count">
                    <h3 className="timer" data-to={8745} data-speed={3000}>0</h3>
                    <span>Clients Supported</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                  <div className="de_count">
                    <h3 className="timer" data-to={235} data-speed={3000}>0</h3>
                    <span>Awards Winning</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".75s">
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
                  {/* <Link to='/'>
                    <img alt src={logo} className="logo" style={{ height: '80px', width: '180px' }} />
                  </Link> */}
                  <div className="spacer-20" />
                  <p>Our goal is for parents to feel good about their childcare choice, and that the children are safe, engaged, educated and smiling. We want our children to warmly look back at their experience with us and see it as a cherished part of their childhood.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget">
                  <h3>Address </h3>
                  <p>A-101,102,103 &nbsp; ,Stella Maris Public School, Mansa Devi Complex, Bhainsa Tibba, Sector 4, Panchkula, Haryana 134114</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget">
                  <h5><a href="https://g.page/giggleandgrow?share" target="_blank">Find Us On Goggle Map</a></h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 sm-text-center mb-sm-30">
                <div className="mt10">© Copyright 2021 - Giggle & Grow</div>
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
        {/* footer close */}
      </Router>
    </div>
  )
}

export default Design
