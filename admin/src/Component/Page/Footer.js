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
