import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Footer from './Footer'
import Header from './Header'
// import image7 from '../images/image7.jpg'

function Design() {
  return (
    <div id="wrapper">
      <Router>
          <Header></Header>
        {/* content begin */}
        <div className="no-bottom no-top" id="content">
          <div id="top" />
          <section data-bgimage="url(images/background/image9.jpg)" style={{ backgroundPosition: "top center" }} className="full-height vertical-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                  <div style={{ backgroundColor: '#12265A', margin: '10px 150px 5px 0px', padding: '10px 0px 1px 8px', borderRadius: '5px' }}>
                    <h5 style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }}>WELCOME TO GIGGLE AND GROW !</h5>
                  </div>
                  <div className="spacer-20" />
                  <h2 style={{ fontSize: '25px', color: '#0f141f', fontWeight: 'bold' }} className="lead">Where QUALITY CHILDCARE matters!</h2>
                  <p className="lead" style={{ color: 'white' }}>While building on to the journey of &nbsp; 'Learning by Doing' . We continue to nurture young minds who will grow up to become responsible citizens.</p>
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
          <section id="section-highlight" data-bgimage="url(images/background/service2.png) top">
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
          <section id="section-banner" className="no-top" data-bgimage="url(images/background/security1.png) top">
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
          {/* parallax start */}
          <div className="designParallax">
            <div>
              <h1 style={{ textAlign: 'center', color: 'white' }}>___ </h1>
              <h2 style={{ textAlign: 'center', color: 'white' }}>LOOKING FOR MORE?</h2>
            </div>
          </div>
          {/* Parallax End */}
          <section id="section-testimonial" data-bgimage="url(images/background/parent2.png)  top">
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
                          <p>Great support, like i -have never seen before. Thanks to the support team, they are very helpfull. This company provide customers great solution, that makes them best.</p>
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
              <div className="col-md-12 text-center">
                  <h1>Enroll Your Child Now! Call Us</h1>
                  <h1>+91 87288-66331</h1> <br/>
                  <a className="btn-custom" href="/contactus">Enroll Online</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* content close */}
              {/* footer */}
              <Footer></Footer>
      </Router>
    </div>
  )
}

export default Design
