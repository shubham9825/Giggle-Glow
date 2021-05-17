import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { GetService } from '../../actions/Service.action'
import Header from './Header'
import Footer from './Footer'

function Services(props) {

    //getdata
    useEffect(() => {
        props.GetAllService()
    }, [])

    return (
        <div>
            <Router>
                {/* header begin */}
                <Header></Header>
                {/* header close */}
                {/* content begin */}
                <div className="no-bottom no-top" id="content">
                    <div id="top" />
                    {/* section begin */}
                    <section id="subheader" data-bgimage="url(images/background/service2.png) bottom">
                        <div className="center-y relative text-center" data-scroll-speed={4}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2">
                                        <form action="blank.php" className="row" id="form_subscribe" method="post" name="myForm">
                                            <div className="col-md-12 text-center">
                                                <br />
                                                <h1>What We Offer</h1>
                                                <p style={{fontSize:'18px'}}>Giggle And Grow’s mission is to provide children with a warm, loving, friendly atmosphere that promotes exploration, peer learning, interactive education, critical thinking and discovery.</p>
                                                <br /><br />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                </section>
                     
                    <section id="section-fun-facts" className="pt40 pb40 text-light bg-color-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={15} data-speed={1000}>0</h3>
                                        <span>Total Groups</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={7} data-speed={1000}>0</h3>
                                        <span>Qualified Teachers</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6" data-wow-delay=".5s">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={4} data-speed={1000}>0</h3>
                                        <span>Years of Experience</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="de_count">
                                        <h3 className="timer" data-to={70} data-speed={1000}>0</h3>
                                        <span>Students Enrolled</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* content close */}
                {/* footer begin */}
                <Footer></Footer>
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
