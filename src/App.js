import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import {Nav, Container} from 'react-bootstrap'


function App() {

  // useEffect(()=>{

  // },
  // [/* some other state changes (if using state, endless loop)*/])
  // // const [state, setState] = useState({ //have prop drilling
  // //   someProp:'SomeVal'
  // // })
  // const [state, setState] = useState();


  return (
    <div className="App">
      <Router>
        <Container>
          <Nav variant = "tabs" defaultActiveKey = "/about">
            <Nav.Item > <Nav.Link href = "/" >About</Nav.Link>    </Nav.Item>
            <Nav.Item > <Nav.Link href = "/contact">Contact</Nav.Link> </Nav.Item>
            <Nav.Item > <Nav.Link href = "/portfolio">Portfolio</Nav.Link> </Nav.Item>
          </Nav>
        </Container>
        <Route exact path ="/" component =  {About} />
        <Route path = "/Contact" component = {Contact}/>
        <Route path ="/Portfolio"component = {Portfolio}/>
      </Router>
    </div>
  );
}

export default App;
