import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import admin from '../images/admin.jpeg'
import parent from '../images/parent.jpeg'
 
function Home() {
    const history = useHistory();
    const AdminSubmit = () => {
        sessionStorage.setItem("user", "admin")
        history.push(`/login`)
    }
    const ParentSubmit = () => {
        sessionStorage.setItem("user", "parent")
        history.push(`/plogin`)
    }

    return (
        <>
            <br />
            <div className='navbar'>
                <div className="align-self-center ml-auto header-col-right">
                    <a href='/' className="btn-custom" style={{ textDecoration: 'none', backgroundColor: '#9ACD32', borderRadius: '9px', padding: '10px' }}><i className="fa fa-home" /> Go To Home</a>
                </div>
            </div>
            <Container style={{marginTop:'190px'}}>
                <br />
                <Row>
                    <Col md='6'>
                        <Card border="primary" bg="warning" text="light">
                            <Card.Header align="center"><h3>ADMIN</h3></Card.Header>
                            <div className="admin logo" align="center">
                                <br />
                                <img src={admin} width="100" height="100"></img>
                            </div>
                            &nbsp;
                            <div className="col-12" align="center">
                                <Button variant="primary" onClick={AdminSubmit} >ADMIN</Button>
                            </div>
                            <br />
                        </Card>
                        <br /><br />
                    </Col>

                    <Col md='6'>
                        <Card border="primary" bg="info" text="dark">
                            <Card.Header align="center"><h3>PARENT'S</h3></Card.Header>

                            <div className="center logo" align="center">
                                <br />
                                <img src={parent} width="100" height="100"></img>
                            </div>
        &nbsp;
        <div className="col-12" align="center">
                                <Button variant="success" onClick={ParentSubmit}>PARENT'S</Button>
                            </div>
                            <br />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>

    )
}
export default Home
