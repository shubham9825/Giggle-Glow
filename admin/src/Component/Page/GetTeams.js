import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetTeam } from '../../actions/Ourteam.action'
import Footer from './Footer'
import Header from './Header'

function GetTeams(props) {
    //getdata
    useEffect(() => {
        props.getTeamdata()
    }, [])

    return (
        <>
            <div id="wrapper">
                <Header></Header>
                {/* content begin */}
                <div className="no-bottom no-top" id="content">
                    <div id="top" />
                    {/* section begin */}
                    <section id="subheader" data-bgimage="url(images/background/teams.png) bottom">
                        <div className="center-y relative text-center" data-scroll-speed={4}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2">
                                        <form action="blank.php" className="row" id="form_subscribe" method="post" name="myForm">
                                            <div className="col-md-12 text-center">
                                                <h1>Our Team</h1>
                                                <p>Awsome Page Teaser Here</p>
                                                <br /><br />
                                            </div>
                                            <div className="clearfix" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* section close */}
                        <section className="no-top pos-top relative">
                            <div className="container">
                                {props.CreateTeam.getData.length > 0 &&
                                    <div className="row">
                                        {props.CreateTeam.getData.map(theData =>
                                            <div className="col-lg-3 col-md-6 col-sm-6 mb30 ">
                                                <div className="f-profile text-center  personData">
                                                    <div className="fp-wrap f-invert customImg personData">
                                                        <img src={`http://localhost:3001/OurTeam/${theData.image}`} className="fp-image w-100" alt />
                                                    </div>
                                                    <h4>{theData.name}</h4>
                                                    <p>{theData.post}</p>
                                                </div>
                                            </div>)}
                                    </div>}
                            </div>
                        </section>
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
                <Footer></Footer>
                {/* <div id="preloader">
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div> */}
            </div>

        </>
    )
}


const mapStateToProps = (store) => {
    return {
        CreateTeam: store.CreateTeam
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeamdata: () => dispatch(GetTeam())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetTeams)
