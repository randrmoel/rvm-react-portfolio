import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import '../styles/Portfolio.css'
import Pic11 from '../images/WorkDayScheduler.jpg'
import Pic12 from '../images/CodeQuiz.jpg'
import Pic13 from '../images/PasswordGenerator.jpg'
import Pic21 from '../images/WeatherDashboard.jpg'
import Pic22 from '../images/ActorPortfolio.jpg'
import Pic23 from '../images/rvm-team-prog.png'
import Pic31 from '../images/HW13Image.png'
import Pic32 from '../images/home_page.JPG'

function Portfolio(props) {
    return(
        <div>
            <Container style = {props.BackPicStyle}>
                <Row>
                    <Col style={{marginLeft:"2%"}}>
                        <h3>Portfolio</h3>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-day-planner/" target ="_blank">
                            <img src={Pic11} className = "img-fluid rounded float-left port-pic" 
                                alt = "Work Day Scheduler" />
                        </a>
                        <p className = "port-label">
                            Work Day Scheduler
                        </p>
                    </Col>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-code-quiz/" target = "_blank">
                            <img src={Pic12} className = "img-fluid rounded float-left port-pic" 
                                alt = "Code Quiz" />
                        </a>
                        <p className = "port-label">
                            Code Quiz
                        </p>

                    </Col>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-pw-gen/" target = "_blank">
                            <img src={Pic13} className = "img-fluid rounded float-left port-pic" 
                                alt = "Password Generator" />
                        </a>
                        <p className = "port-label">
                            Password Generator
                        </p>

                    </Col>
                </Row> {/*End of Row 1*/}
                <Row>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-weather-app/" target = "_blank">
                            <img src={Pic21} className = "img-fluid rounded float-left port-pic" 
                            alt = "Weather Dashboard" />
                        </a>
                        <p className ="port-label">
                            Weather Dashboard
                        </p>
                    </Col>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-group-project-1/" target ="_blank">
                            <img src={Pic22} className = "img-fluid rounded float-left port-pic" 
                                alt = "Actor Profile" />
                        </a>
                        <p className = "port-label">
                            Actor Profile
                        </p>
                    </Col>

                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = 'https://randrmoel.github.io/rvm-team-prof-gen/' target = "_blank">
                            <img src={Pic23} className = "img-fluid rounded float-left port-pic" 
                                alt = "Profile Generator" />
                        </a>
                        <p className = "port-label">
                            Profile Generator
                        </p>

                    </Col>
                </Row> {/*End of Row 2*/}
                <Row>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href ="https://lit-tor-25062.herokuapp.com/" target ="_blank">
                            <img src={Pic31} className = "img-fluid rounded float-left port-pic" 
                                alt = "Eat Da Burger" />
                        </a>
                        <p className = "port-label">
                            Eat Da Burger
                        </p>

                    </Col>
                    <Col sm="3" md="4">
                        <a rel="noopener noreferrer" href = "https://pawtytime2.herokuapp.com/" target ="_blank">
                            <img src={Pic32} className = "img-fluid rounded float-left port-pic" 
                                alt = "Dog Walk App" />
                        </a>
                        <p className = "port-label">
                            Pawty Time!
                        </p>
                    </Col>
                </Row> {/*End of Row 3*/}
            </Container>
        </div>
    )
}

export default Portfolio;