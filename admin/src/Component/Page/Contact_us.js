import React from 'react'
import Inquire from '../NavBar Form/Inquire'

function ContactUs() {
  return (
    <div>
      <div id="wrapper">
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
                      <a href="index.html">
                        <img alt src="images/logo-1.png" />
                      </a>
                    </div>
                    {/* logo close */}
                    {/* logo close */}
                  </div>
                  <div className="align-self-center ml-auto header-col-mid">
                    {/* mainmenu begin */}
                    <ul id="mainmenu">
                      <li>
                        <a href="index.html">Home</a>
                        <ul>
                          <li><a href="index.html">Main</a></li>
                          <li><a href="index-startup.html">Startup</a></li>
                          <li><a href="index-coworking.html">Co-working</a></li>
                          <li><a href="index-agency.html">Agency</a></li>
                          <li><a href="index-apps.html">Apps</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Company</a>
                        <ul>
                          <li><a href="about-us.html">About Us</a></li>
                          <li><a href="our-team.html">Our Team</a></li>
                          <li><a href="our-history.html">Our History</a></li>
                          <li><a href="faq.html">FAQs</a></li>
                          <li><a href="careers.html">Careers</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Services</a>
                        <ul>
                          <li><a href="service-single.html">Service Single</a></li>
                          <li><a href="services-image.html">Services Images</a></li>
                          <li><a href="services-icon.html">Services Icon</a></li>
                          <li><a href="services-icon-boxed.html">Services Icon Boxed</a></li>
                          <li><a href="services-carousel.html">Services Carousel</a></li>
                          <li><a href="pricing-plans.html">Pricing Plans</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul>
                          <li><a href="news.html">News</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="login-2.html">Login 2</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="contact-us.html">Contact Us</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Elements</a>
                        <ul>
                          <li><a href="icons-font-awesome.html">Font Awesome Icons</a></li>
                          <li><a href="icons-elegant.html">Elegant Icons</a></li>
                          <li><a href="icons-etline.html">Etline Icons</a></li>
                          <li><a href="alerts.html">Alerts</a></li>
                          <li><a href="accordion.html">Accordion</a></li>
                          <li><a href="modal.html">Modal</a></li>
                          <li><a href="progress-bar.html">Progress Bar</a></li>
                          <li><a href="tabs.html">Tabs</a></li>
                          <li><a href="tabs.html">Timeline</a></li>
                          <li><a href="counters.html">Counters</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="align-self-center ml-auto header-col-right">
                    <a className="btn-custom" href="#"><i className="fa fa-arrow-down" /> Buy Now</a>
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
      <Inquire />
      </div>
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
      {/* footer close */}
      <div id="preloader">
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>




    </div>
  )
}

export default ContactUs
