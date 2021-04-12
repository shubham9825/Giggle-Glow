import React from 'react'
import {Form,Button} from 'react-bootstrap'

function Album() {
    return (
        <div>
            <Form className="container mt-5">
                <fieldset>
                    <legend>Album</legend>
                <Form.Group>
                    <Form.Label>Album Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Album Name." />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                </fieldset>
            </Form>
        </div>
    )
}

export default Album
