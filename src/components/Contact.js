import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import '../styles/Contact.css'

const initialFormData = Object.freeze({
    name: "",
    email: "",
    inText: ""
})


function Contact(props) {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e)=>{
        updateFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        });
    };

    function sendEmail(e){
        document.getElementById("formName").innerHTML="";
        document.getElementById("formBasicEmail").innerHTML="";
        document.getElementById("textArea").innerHTML="";
        /*window.open(`"mailto:${formData.email}$subject=Contact Rob Moel from ${formData.name}&body=${formData.intext}"`)*/
        console.log(formData.name, formData.email, formData.inText);
        window.location = `mailto:robert.moel@rvmconsulting1.com?subject=Contact%20Rob%20Moel%20from%20${formData.email.split(" ").join("%20")}&body=${formData.inText.split(" ").join("%20")}`

    }
    return(
        <div>
            <Container style = {props.BackPicStyle}>
                <Row>
                    <Col style={{marginLeft:"2%"}}>
                        <h3>Contact Me</h3>
                    </Col>
                </Row>
                <hr ></hr>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId = "formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" onChange = {handleChange} type="input" placeholder="Enter your first and last name"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name= "email" onChange = {handleChange} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="textArea">
                                <Form.Label>Enter Comments Here</Form.Label>
                                <Form.Control name="inText" onChange={handleChange} as="textarea" rows="5" />
                            </Form.Group>
                            <Button onClick={sendEmail} variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;