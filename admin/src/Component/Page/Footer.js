import React from 'react'

function Footer() {
    return (
        <div>
            {/* footer begin */}
            <footer className="footer-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="widget">
                                <a href="index.html"><img alt className="logo" src="images/logo-1.png" /></a>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.6534699062559!2d72.8548351580205!3d21.21967379647381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c202d98bf%3A0xb20a758d1f165e67!2sKshama%20Society%2C%20Satadhar%20Krupa%20Society%2C%20Sitaram%20Nagar%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1620923365151!5m2!1sen!2sin" width={300} height={250} style={{ border: 0 }} allowFullScreen loading="lazy" />
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
        </div>
    )
}

export default Footer
