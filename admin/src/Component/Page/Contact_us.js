import React from 'react'
import Inquire from '../NavBar Form/Inquire'
import Footer from './Footer'
import Header from './Header'
function ContactUs() {
  return (
    <div>
      <div id="wrapper">
        {/* navbar start */}
        <Header></Header>
        {/* main content */}
        <Inquire />
        {/* footer */}
        <Footer></Footer>
      </div>
      {/* footer close */}
    </div>
  )
}

export default ContactUs
