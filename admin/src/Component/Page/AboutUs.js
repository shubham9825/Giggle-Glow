import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { connect } from 'react-redux'
import { GetAbout } from '../../actions/About.action'

function AboutUs(props) {
    //get request
    useEffect(() => {
        props.getAboutData()
    }, [])

    return (
        <div>
            <Header />
            {/* content begin */}
            <div className="no-bottom no-top" id="content">
                <div id="top" />
                {/* section begin */}
                <section id="subheader" data-bgimage="url(images/background/about.png) bottom">
                    <div className="center-y relative text-center" data-scroll-speed={4}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <form action="blank.php" className="row" id="form_subscribe" method="post" name="myForm">
                                        <div className="col text-center">
                                            <div className="spacer-single" />
                                            <h1>About Us</h1>
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
                <section className="no-top" data-bgimage="url(images/background/6.png) center">
                    <div className="container">
                        {props.createAbout.getData.length > 0 &&
                            <div className="row align-items-center">
                                <div className="col-md-5 ">
                                    <img src="images/misc/about1.png" className="img-fluid" alt />
                                </div>
                                {props.createAbout.getData.map(theData =>
                                    <div className="col-md-6 offset-md-1" key={theData._id}>
                                        <h3 style={{ marginTop: '10%' }} >{theData.about}</h3>
                                        <p> Our goal is to provide a warm, open environment where children feel safe enough to ask questions, explore and seek answers. We challenge every child to surpass his or her own personal best and help them over the hills and thru the valleys of these lovely growing years.</p>
                                    </div>
                                )}
                            </div>}
                        {props.createAbout.getData.length > 0 &&
                            <div className="row align-items-center mt-5 p-5" style={{ backgroundColor: 'skyblue', overflow: 'hidden' }}>
                                {props.createAbout.getData.map(theData =>
                                    <div className='row'>
                                        <div className="col-lg-6 " key={theData._id}>
                                            <h1><b>MISSION</b></h1>
                                            <p style={{ paddingTop: '30px', textAlign: 'justify' }}>{theData.vision}</p>
                                        </div>
                                        <div className="col-lg-6" style={{ paddingBottom: '20px' }}>
                                            <h1><b >VISION</b></h1>
                                            <p style={{ paddingTop: '30px', textAlign: 'justify' }}>{theData.mission}</p>
                                        </div>
                                    </div>
                                )}
                            </div>}

                        <div className="spacer-double" />
                        <div>
                            <h1><b>We pledge each day to strive</b></h1>
                            <div className='row'>
                                <div className="col-lg-6">
                                    <ul className='aboutstrive'>
                                        <li><span>To be role models, creating an atmosphere where respect for one another and ourselves manifests itself in everything we do.</span></li>
                                        <li><span>To provide qualified, caring and enthusiastic educators who will nurture each child’s learning, thinking and development.</span></li>
                                        <li><span>To offer a safe, secure environment where each child’s individual needs are recognized and respected.</span></li>
                                        <li><span>To enable creativity that will foster mental growth by providing opportunities for testing new ideas, new ways of thinking and problem solving that acknowledges and celebrates their uniqueness and diversity.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <ul className='aboutright'>
                                        <li><span>To develop a curriculum based on observations, strengths, and interests of the children to nurture their development and offer experiences that help children learn about themselves and the world around them.</span></li>
                                        <li><span>To make transparent to parents, families and children the learning environment we are creating and sharing those milestones and achievements through a variety of assessments and documentation.</span></li>
                                        <li><span>To communicate effectively with parents to form a cooperative team, the key to fostering a child’s success. Communication provides opportunity for the child to reach their maximum potential both inside and outside the classroom.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt60 pb60 bg-color-2 text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-sm-30 text-lg-left text-sm-center">
                                <h3 className="no-bottom">Awesomeness begin here. Are you ready?</h3>
                            </div>
                            <div className="col-md-4 text-lg-right text-sm-center">
                                <a href="/contactus" className="btn-custom capsule med">Let's do it!</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* content close */}
            <Footer />
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        createAbout: store.createAbout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAboutData: () => dispatch(GetAbout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)

