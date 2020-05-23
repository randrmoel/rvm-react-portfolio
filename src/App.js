import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import {Nav, Container} from 'react-bootstrap'
import BackPic from './images/spikes.png'



function App() {

  // useEffect(()=>{

  // },
  // [/* some other state changes (if using state, endless loop)*/])
  // // const [state, setState] = useState({ //have prop drilling
  // //   someProp:'SomeVal'
  // // })
  // const [state, setState] = useState();

  const BackPicStyle =  {backgroundImage: `url(${BackPic})`, margin:"0%", padding:"1% 20% 15% 3%", width:"max-width"}

  return (
    <div className="App">
      <Router>
        <Container>
          <Nav fill variant = "tabs" defaultActiveKey = "/about">
            <Nav.Item style={{fontSize:"2em", color:"#4aaaa5"}}>Robert Moel</Nav.Item>
            <Nav.Item > <Nav.Link href = "/" >About</Nav.Link></Nav.Item>
            <Nav.Item > <Nav.Link href = "/contact">Contact</Nav.Link> </Nav.Item>
            <Nav.Item > <Nav.Link href = "/portfolio">Portfolio</Nav.Link> </Nav.Item>
          </Nav>
        </Container>
        <Route exact path ="/" >
          <About BackPicStyle={BackPicStyle}/>
        </Route>
        <Route path = "/Contact" >
          <Contact BackPicStyle={BackPicStyle}/>
        </Route>
        <Route path ="/Portfolio">
          <Portfolio BackPicStyle={BackPicStyle}/>
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
