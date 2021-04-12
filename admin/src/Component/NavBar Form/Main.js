import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import admin from  '../images/admin.jpeg'
import parent from '../images/parent.jpeg'

function Home() {
    const history = useHistory();

    const AdminSubmit = () => {
        sessionStorage.setItem("user","admin")
        history.push(`/login`)
    }

    const ParentSubmit = () => {
        sessionStorage.setItem("user","parent")
        history.push(`/plogin`)
    }



    return (

        <>
        &nbsp;&nbsp;
            <Container>
                <Row>
                    <Col>
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

                    <Col>
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
                    {/* <Col>
                        <Card border="primary" bg="secondary" text="light">
                            <Card.Header align="center"><h3>PARENT'S</h3></Card.Header>

                            <div className="end-user logo" align="center">
                                <img src={parent} width="100" height="100"></img>
                            </div>
        &nbsp;
        <div className="col-12" align="center">
                                <Button variant="danger" onClick={handleChange3}>PARENT'S</Button>
                            </div>
        &nbsp;
          </Card>
                    </Col> */}
                </Row>
            </Container>
        </>

    )
}
export default Home
