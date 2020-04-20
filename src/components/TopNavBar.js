import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Artem from "../Artem.png";
import '../css/TopNavBar.css';

class TopNavBar extends React.Component {
    render() {
        var nombre = "Naysha Chire";
        return (
            <div className=" col-12 row d-flex justify-content-start navBarContainer">
                <div className="col container-fluid navBarContainer">
                    <Router>
                        <div>
                            <Navbar bg="light" id="topNavBar" expand="lg">
                                <Navbar.Brand id="navbarBrand" href="/home">
                                    <img
                                        alt=""
                                        src={Artem}
                                        width="40"
                                        height="40"
                                        id="logo"
                                        className="d-inline-block align-top"
                                    />{' '}
                                Artem
                            </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Switch>
                                            <Route path="/doctorscreen">
                                                <Nav.Link href="/doctorprofile">Profile</Nav.Link>
                                                <Nav.Link href="/doctorappt">Agenda</Nav.Link>
                                                <Nav.Link href="/doctoragenda">Calendar</Nav.Link>
                                                <div id="hspaceTopBarDoctorScreen"></div>
                                                <Navbar.Brand inline >Welcome Dr. Naysha Chire!!</Navbar.Brand>
                                            </Route>
                                            <Route path="/patientscreen" >

                                                <Nav.Link href="/patientprofile">Profile</Nav.Link>
                                                <Nav.Link>Appointments</Nav.Link>
                                                <NavDropdown title="Search Doctors" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/doctorsearch">By location</NavDropdown.Item>
                                                    <NavDropdown.Item href="/doctorsearch">By name</NavDropdown.Item>
                                                    <NavDropdown.Item href="/doctorsearch">By specialty</NavDropdown.Item>
                                                </NavDropdown>
                                                <div id="hspaceTopBarPatientScreen"></div>
                                                <Navbar.Brand inline >Welcome José Flores!!</Navbar.Brand>
                                            </Route>
                                            <Route path="/patientprofile" >

                                                <Nav.Link href="/patientprofile">Profile</Nav.Link>
                                                <Nav.Link>Appointments</Nav.Link>
                                                <NavDropdown title="Search Doctors" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="#searchdoctors">By location</NavDropdown.Item>
                                                    <NavDropdown.Item href="#searchdoctors">By name</NavDropdown.Item>
                                                    <NavDropdown.Item href="/doctorsearch">By specialty</NavDropdown.Item>
                                                </NavDropdown>
                                                <div id="hspaceTopBarPatientScreen"></div>
                                                <Navbar.Brand inline >Welcome José Flores!!</Navbar.Brand>
                                            </Route>
                                            <Route path="/doctorsearch" >

                                                <Nav.Link href="/patientprofile">Profile</Nav.Link>
                                                <Nav.Link>Appointments</Nav.Link>
                                                <NavDropdown title="Search Doctors" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/doctorsearch">By location</NavDropdown.Item>
                                                    <NavDropdown.Item href="/doctorsearch">By name</NavDropdown.Item>
                                                    <NavDropdown.Item href="/doctorsearch">By specialty</NavDropdown.Item>
                                                </NavDropdown>
                                                <div id="hspaceTopBarPatientScreen"></div>
                                                <Navbar.Brand inline >Welcome José Flores!!</Navbar.Brand>
                                            </Route>
                                            <Route path="/calendar" >

                                                <Nav.Link>Profile</Nav.Link>
                                                <Nav.Link href="calendar">Appointments</Nav.Link>
                                                <Navbar.Brand inline >Welcome !!</Navbar.Brand>
                                            </Route>
                                            <Route path="/home">
                                                <div id="hspaceTopBar"></div>
                                                <Form inline>
                                                    <Button href="login" variant="outline-success">Login</Button>
                                                    <div id="hspaceBetweenButtons"></div>
                                                    <Button href="/register" variant="outline-success">Sign up</Button>
                                                </Form>
                                            </Route>
                                            <Route path="/">
                                                <div id="hspaceTopBar"></div>
                                                <Form inline>
                                                    <Button href="login" variant="outline-success">Login</Button>
                                                    <div id="hspaceBetweenButtons"></div>
                                                    <Button href="/register" variant="outline-success">Sign up</Button>
                                                </Form>
                                            </Route>
                                        </Switch>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default TopNavBar;