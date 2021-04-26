import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Practice() {
   
    return (
        <>
                <Container>
                <Row  style={{border:'2px solid black'}}>
                        <Col md={6}><p style={{border:'2px solid green'}}>hello</p></Col>
                        <Col  md={6}><p style={{border:'2px solid red'}}>world</p></Col>
                  </Row>
                </Container>
                  
            
        </>
    )
}

export default Practice
