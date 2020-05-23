import React from 'react'
import {Navbar,  Container} from 'react-bootstrap'

function Footer() {
    return(
        <div className="fixed-bottom" >  
            <Navbar bg="dark" variant="dark" style={{borderTop:"2px solid #ff0000"}}>
                <Container style = {{textAlign:"center"}}>
                    <Navbar.Brand style ={{ padding:"0 0 0 50%", fontSize: "small", textAlign:"center"}}>Copyright &copy; Robert V. Moel</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;