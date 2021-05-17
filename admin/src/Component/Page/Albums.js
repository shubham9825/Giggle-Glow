import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAlbum } from '../../actions/Album.action'
import Footer from './Footer'
import Header from './Header'

function Albums(props) {

    //get request 
    useEffect(() => {
        props.GetAlbum()
    }, [])

    const Handlekey = (theData) => {
        const test = theData._id
        console.log(test)
    }

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
                                    <form className="row" id="form_subscribe" method="post" name="myForm">
                                        <div className="col-md-12 text-center">
                                            <h1>Albums</h1>
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
                        {props.albumstore.getData.length > 0 &&
                            <div className="row" >
                                {props.albumstore.getData.map(theData =>
                                    <div className="col-md-4 mb30" key={theData._id} onClick={() => { Handlekey(theData) }}>
                                        <div className="de-image-hover rounded" >
                                            <a className="image-popup" href={`/gallarys?id=${theData._id}`}>
                                                <span className="dih-title-wrap">
                                                    <span className="dih-title"  >{theData.album}</span>
                                                </span>
                                                 <span className="dih-overlay" />
                                                <img className="img-fluid" src={`http://localhost:3001/Album/${theData.image}`} alt="Image Not Found" />
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
                                <a href="/" className="btn-custom capsule med">Let's do it!</a>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
            {/* content close */}
            <Footer />
        </div >
    )
}


const mapStateToProps = (store) => {
    return {
        albumstore: store.CreateAlbum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAlbum: () => dispatch(GetAlbum())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)
