import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import {Nav, Container} from 'react-bootstrap'
import BackPic from './images/spikes.png'

function App() {


  const BackPicStyle =  {backgroundImage: `url(${BackPic})`, margin:"0%", padding:"1% 20% 15% 3%", width:"max-width"}

  return (
    <div className="App">
      <Router>
        <Container>
          <Nav fill variant = "tabs" defaultActiveKey = "/about">
            <Nav.Item style={{fontSize:"2em", color:"#ffffff", backgroundColor:"darkblue"}}>Robert Moel</Nav.Item>
            <Nav.Item> <Link to = "/" >About</Link></Nav.Item>
            <Nav.Item> <Link to = "/contact">Contact</Link> </Nav.Item>
            <Nav.Item> <Link to = "/portfolio">Portfolio</Link> </Nav.Item>
          </Nav>
        </Container>
        <Route exact path ="/" >
          <About BackPicStyle={BackPicStyle}/>
        </Route>
        <Route path = "/contact" >
          <Contact BackPicStyle={BackPicStyle}/>
        </Route>
        <Route path ="/portfolio">
          <Portfolio BackPicStyle={BackPicStyle}/>
        </Route>
        <Redirect to="/"/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
