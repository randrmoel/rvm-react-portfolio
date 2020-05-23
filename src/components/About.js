import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import myImage from '../images/RobMoelHeadShot.jpg'
import "../styles/About.css"


function About(props) {
    return(
        <div>
            <Container fluid style = {props.BackPicStyle}>
                <Row style={{paddingBottom:"3%"}}>
                    <Col style={{marginLeft:"2%"}}>
                        <h3>About Me</h3>
                        <img src={myImage} className = "headshot float-left" 
                        alt = "Rob Moel Headshot" />
                        <p>Robert Moel is an independent contractor working out of Winter Garden, FL.  With over 30-years of experience in Telecom operations, new division start-ups, division P&L improvements, Moel can tackle your firm's toughest problems. Moel is also a Certified professional engineer (TX 79764) and is skilled in new-build and rebuild construction managment, system maintenance, call center turn-arounds, and other skills.</p>
                        <p>Moel has both undergraduate and graduate degrees in Electrical Engineering, an MBA, and a Masters in statistics.</p>

                        <p>Moel has expertise in Javascript, CSS, HTMl, Python, R, Minitab, LaTeX, SQL (SAS, MS SQL, and Teradata), and SAS.  Moel is also familar with linear and integer programing, machine learning, regression (linear, logistic, etc), time series prediciton, Bayseian Statistics, and optimization.</p>

                    </Col> 
                    </Row>
            </Container>
        </div>
    )
}

export default About;