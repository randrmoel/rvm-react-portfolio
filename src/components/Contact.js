import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'

function Contact(props) {
    return(
        <div>
            <Container style = {props.BackPicStyle}>
                <Row>
                    <Col style={{marginLeft:"2%"}}>
                        <h3>Contact Me</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId = "Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="input" placeholder="Enter your first and last name"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="textArea">
                                <Form.Label>Enter Comments Here</Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contact;