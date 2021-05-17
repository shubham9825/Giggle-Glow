import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import * as HiIcons from "react-icons/hi"

// import image7 from '../images/image7.jpg'

function Design() {

  return (
    <div id="wrapper">
      <Router>
        <Header></Header>
        {/* content begin */}
        <div className="no-bottom no-top" id="content">
          <div id="top" />
          <section data-bgimage="url(images/background/slide3.png)" style={{ backgroundPosition: "top center" }} className="full-height vertical-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
                  <span className="welcome">WELCOME TO GIGGLE AND GROW !</span>
                  <div className="spacer-20" />
                  <h2 style={{ fontSize: '25px', color: '#0f141f', fontWeight: 'bold' }} className="lead">Where QUALITY CHILDCARE matters!</h2>
                  <p className="lead" style={{ color: '#70747f' }}>While building on to the journey of &nbsp; 'Learning by Doing' . We continue to nurture young minds who will grow up to become responsible citizens.</p>
                  <div className="spacer-20" />
                  <a className="btn-custom" href="/aboutus">Read More</a>
                  <div className="mb-sm-30" />
                </div>
              </div>
            </div>
          </section>
          <section id="section-highlight" data-bgimage="url(images/background/service3.png) top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div>
                    <h1 className='text-center'>We Provide the Main Kids Activites</h1>
                    {/* <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    <p className='text-center' style={{ color: '#12265A', fontWeight: 'bold' }}>Custom Learning Material</p>
                    <ul className='activity' >
                      <li><span>Custom Learning Material</span></li>
                      <li><span>Art & Craft Activities</span></li>
                      <li><span>Music, Singing & Dance Classes</span></li>
                      <li><span>Self Defense Academy</span></li>
                      <li><span>Outdoor Play</span></li>
                      <li><span>Power Backup</span></li>
                      <li><span>Air-conditioned & Warmed Rooms</span></li>
                      <li><span>Separate Sleeping & Meal Rooms</span></li>
                    </ul>
                    <div className="spacer-20" />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* feature box begin */}
                <div className="col-lg-4 col-md-6 mb40 wow fadeInUp" data-wow-delay="0s">
                  <div className="feature-box f-boxed style-3">
                    <img src="images/logo-clients/1.png" className='pb-3' alt />
                    <div className="text">
                      <h4>Morning care</h4>
                      <p>8:30 am To 01:30 pm</p>
                    </div>
                    <i className="wm fa">
                      <img src="images/logo-clients/1.png" style={{ width: '100px', height: '100px' }} alt />
                    </i>
                  </div>
                </div>
                {/* feature box close */}
                {/* feature box begin */}
                <div className="col-lg-4 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="feature-box f-boxed style-3">
                    <img src="images/logo-clients/pencil.png" style={{ width: '50px', height: '100%' }} className='pb-3' alt />
                    <div className="text">
                      <h4>Evening Care</h4>
                      <p> 01:30 pm To 06:30 pm</p>
                    </div>
                    <i className="wm fa">
                      <img src="images/logo-clients/pencil.png" style={{ width: '100px', height: '100px' }} alt />
                    </i>
                  </div>
                </div>
                {/* feature box close */}
                {/* feature box begin */}
                <div className="col-lg-4 col-md-6 mb40 sq-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="feature-box f-boxed style-3">
                    <img src="images/logo-clients/1.png" className='pb-3' alt />
                    <div className="text">
                      <h4>Full Day Care</h4>
                      <p>08:00am To 06:30 pm </p>
                    </div>
                    <i className="wm fa">
                      <img src="images/logo-clients/1.png" style={{ width: '100px', height: '100px' }} alt />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="section-banner" className="no-top" data-bgimage="url(images/background/security1.png) top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight" data-wow-delay="0s">
                  <img className="relative img-fluid" src="images/misc/home3.png" alt />
                </div>
                <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay="0s">
                  <h2>
                    Why Early Education matters
            </h2>
                  <p>
                    Our goal is to create a warm, open environment where children feel safe enough to ask questions, explore and seek answers. We challenge every child to surpass his or her own personal best and help them over the hills and through the valleys of these growing years...
            </p>
                  <div className="spacer-half" />
                  <a className="btn-custom" href="/aboutus">Read more</a>
                </div>
                <div className="spacer-double" />
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0s">
                  <div id="owl-logo" className="logo-carousel owl-carousel owl-theme">
                    <img src="images/logo-clients/13.png" className="img-fluid" alt />
                    <img src="images/logo-clients/14.png" className="img-fluid" alt />
                    <img src="images/logo-clients/17.png" className="img-fluid" alt />
                    <img src="images/logo-clients/21.png" className="img-fluid" alt />
                    <img src="images/logo-clients/18.png" className="img-fluid" alt />
                    <img src="images/logo-clients/19.png" className="img-fluid" alt />
                    <img src="images/logo-clients/15.png" className="img-fluid" alt />
                    <img src="images/logo-clients/16.png" className="img-fluid" alt />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* parallax start */}
          <div className="designParallax" style={{ position: 'relative' }}>
            <img src="images/parallex/logo1.png" alt="" style={{ position: 'absolute', top: '30%', left: '5%' }} />
          </div>
          {/* Parallax End */}
          <section id="section-testimonial" data-bgimage="url(images/background/parent3.png)  top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <h1> What Parents Say</h1>
                    <p style={{ textAlign: 'center' }}>Our goal is for parents to feel good about their childcare choice,<br />and that the children are safe, engaged, educated and smiling.<br /> We want our children to warmly look back at their experience<br /> with us and see it as a cherished part of their childhood.</p>
                    <div className="spacer-20" />
                  </div>
                  <div className="owl-carousel owl-theme wow fadeInUp" id="testimonial-carousel">
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>A child care is not just about a place where you leave your child and he/she will be taken care of but importantly it is place where your child grows in every aspect and this is the place to go to. The staff here is so warm and takes care of each child in a way the child demands to be taken care of, giving them a feel of home away from home. </p>
                          <div className="de_testi_by" style={{ textAlign: 'center' }}><span>Guntaas K Chopra</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Best day-care for the child's development in every aspect. The staff is very supportive and talented. It's a second home to my daughter.Thank you celebrating every occasion and keep us updated with her day to day life.</p>
                          <div className="de_testi_by"><span>Anuska Mehta</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>In my opinion, Giggle And Grow is the best childcare of tri-city and I am lucky that my child is a part of it. Aahana was 8 months old when she joined and ever-since the staff has been equally caring and loving which helps me to work stress free for hours knowing that she is in safe hands.</p>
                          <div className="de_testi_by"><span>Sonal Patel</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>Giggle And Grow is so efficient and caring that our 2.5 years old is already singing the rhymes that he is learning at play-way with his favourite Kiran Ma’am. It really gives us joy to see how beautifully they celebrate every occasion and make it special for our kids.</p>
                          <div className="de_testi_by"><span>Meenu sharma</span></div>
                        </blockquote>
                      </div>
                    </div>
                    <div className="item">
                      <div className="de_testi opt-2">
                        <blockquote>
                          <p>2.5 years old and the first child, since then we have only seen this place giggling and growing in the truest sense.They consider us as their extended family and the feeling is definitely mutual!</p>
                          <div className="de_testi_by"><span>Neha gupta</span></div>
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
                  <h1>+91 87288-66331</h1> <br />
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
