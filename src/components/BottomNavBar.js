import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../css/BottomNavBar.css';

class BottomNavBar extends React.Component {
    render() {
        return (
            <div>
                
            <Navbar className="bottomNavBar" bg="dark" variant="light">
                <Nav.Link href="#home">How to make an appointment</Nav.Link>
                <Nav.Link href="#home">About us</Nav.Link>
                <Nav.Link href="#home">Privacy Policies</Nav.Link>
                <Nav.Link href="#home">Contact us</Nav.Link>
                <Nav.Link href="#home">Did you find an error?</Nav.Link>
            </Navbar>
            </div>
        );
    }
}

export default BottomNavBar;