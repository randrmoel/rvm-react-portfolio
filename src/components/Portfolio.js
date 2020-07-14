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
import Pic41 from '../images/intheknowpic.png'

function Portfolio(props) {
    return(
        <div>
            <Container fluid style = {props.BackPicStyle}>
                <Row>
                    <Col sm="12" md="12" style={{marginLeft:"2%"}}>
                        <h3>Portfolio</h3>
                    </Col>
                </Row> {/*End of Row 1*/}
                <hr></hr>

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-group-project-1/" target ="_blank">
                            <img src={Pic22} className = "img-fluid rounded float-left port-pic" 
                                alt = "Actor Profile" />
                        </a>
                        <p className = "port-label">
                            Actor Profile
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Curious about your favorite stars? Get all the details including birth-place using Google Maps® with this handy app.
                        </p>
                    </Col>
                </Row> {/*End of Row 2*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://pawtytime2.herokuapp.com/" target ="_blank">
                            <img src={Pic32} className = "img-fluid rounded float-left port-pic" 
                                alt = "Dog Walk App" />
                        </a>
                        <p className = "port-label">
                            Pawty Time!
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Using sequelize this app helps dog-walkers and dog owners make and keep track of dogs, appointments, and users.
                        </p>
                    </Col>
                </Row> {/*End of Row 3*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://https://in-the-know-for-you.herokuapp.com//" target ="_blank">
                            <img src={Pic41} className = "img-fluid rounded float-left port-pic" 
                                alt = "In the Know!" />
                        </a>
                        <p className = "port-label">
                            In the Know -- Idea tracker
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Using mongoose and react this app helps to organize your ideas, tutorials, web snippets, and topics in one location.
                        </p>
                    </Col>
                </Row> {/*End of Row 4*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-day-planner/" target ="_blank">
                            <img src={Pic11} className = "img-fluid rounded float-left port-pic" 
                                alt = "Work Day Scheduler" />
                        </a>
                        <p className = "port-label">
                            Work Day Scheduler
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Keep your workday schedule up to date with this handy app. Load your appointments for the day and never miss an important
                        </p>
                    </Col>
                </Row> {/*End of Row 5*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-code-quiz/" target = "_blank">
                            <img src={Pic12} className = "img-fluid rounded float-left port-pic" 
                                alt = "Code Quiz" />
                        </a>
                        <p className = "port-label">
                            Code Quiz
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Have fun and keep your skills sharp with this code quiz app.
                        </p>
                    </Col>
                </Row> {/*End of Row 6*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-pw-gen/" target = "_blank">
                            <img src={Pic13} className = "img-fluid rounded float-left port-pic" 
                                alt = "Password Generator" />
                        </a>
                        <p className = "port-label">
                            Password Generator
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Create a complex password based on your specifications of upper case, lower case, numbers or characters with the length you need.
                        </p>
                    </Col>
                </Row> {/*End of Row 7*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = "https://randrmoel.github.io/rvm-weather-app/" target = "_blank">
                            <img src={Pic21} className = "img-fluid rounded float-left port-pic" 
                            alt = "Weather Dashboard" />
                        </a>
                        <p className ="port-label">
                            Weather Dashboard
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Do I need an umbrella?  Find local weather based on city name and never be caught out in the rain.
                        </p>
                    </Col>
                </Row> {/*End of Row 8*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href = 'https://randrmoel.github.io/rvm-team-prof-gen/' target = "_blank">
                            <img src={Pic23} className = "img-fluid rounded float-left port-pic" 
                                alt = "Profile Generator" />
                        </a>
                        <p className = "port-label">
                            Profile Generator
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            Using classes, get profiles to build a coding team.
                        </p>
                    </Col>
                </Row> {/*End of Row 9*/}

                <Row>
                    <Col sm="5" md="7">
                        <a rel="noopener noreferrer" href ="https://lit-tor-25062.herokuapp.com/" target ="_blank">
                            <img src={Pic31} className = "img-fluid rounded float-left port-pic" 
                                alt = "Eat Da Burger" />
                        </a>
                        <p className = "port-label">
                            Eat Da Burger
                        </p>
                    </Col>
                    <Col sm="5" md="5">
                        <p style = {{fontSize: "x-large", fontFamily:"cursive"}}>
                            A fun app that lets you add burgers and eat them using a SQL database and node!
                        </p>
                    </Col>
                </Row> {/*End of Row 10*/}

            </Container>
        </div>
    )
}

export default Portfolio;