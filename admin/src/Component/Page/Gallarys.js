import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import { GetGallery } from '../../actions/Gallery.action'
import Footer from './Footer'
import Header from './Header'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Gallarys(props) {
    let query = useQuery()
    console.log(query)

    useEffect(() => {
        props.getimage(query.get("id"))
        console.log(query.get("id"))
    }, [])

    return (
        <div id="wrapper">
            <Header />
            {/* content begin */}
            <div className="no-bottom no-top" id="content">
                <div id="top" />
                {/* section begin */}
                <section id="subheader" data-bgimage="url(images/background/gallary_bg.png) bottom">
                    <div className="center-y relative text-center" data-scroll-speed={4}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <form  >
                                        <div className="col-md-12 text-center">
                                            <h1>Our Photo Gallery​</h1>
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
                <section className="no-top pos-top relative">
                    <div className="container">
                        {props.creategallery.getData.length > 0 &&
                            <div className="row">
                                {props.creategallery.getData.map(theData =>
                                    <div className="col-md-4 mb30" key={theData._id}>
                                        <div className="de-image-hover rounded">
                                            <a href={`http://localhost:3001/${theData.fileName}`} target="_blank" className="image-popup">
                                                <img style={{ cursor: 'pointer' }} onClick={() => window.open(`http://localhost:3001/${theData.fileName}`, "_blank")} className="img-fluid" src={`http://localhost:3001/${theData.fileName}`} alt="Image Not Found" />
                                            </a>
                                        </div>
                                    </div>)}
                            </div>}
                    </div>
                </section>
                {/* <section className="pt60 pb60 bg-color-2 text-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8 mb-sm-30 text-lg-left text-sm-center">
                                <h3 className="no-bottom">Awesomeness begin here. Are you ready?</h3>
                            </div>
                            <div className="col-md-4 text-lg-right text-sm-center">
                                <a href="#" className="btn-custom capsule med">Let's do it!</a>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
            <Footer />
        </div>
    )
}


const mapStateToProps = (store) => {
    return {
        creategallery: store.CreateGallery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getimage: (owner) => dispatch(GetGallery(owner))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallarys)
