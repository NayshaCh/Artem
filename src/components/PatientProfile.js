import React from 'react';
import {Card, Button, Row, Col, Table} from 'react-bootstrap';
import '../css/PatientProfile.css';


class PatientProfile extends React.Component {

    render() {
        
        return (
            <div className="container">
           
                    <Card className="patientProfileCard">
                        <Row>
                            <Col className="col col-3">
                                <Card.Img className="patientProfileImage" variant="top" src="https://cutt.ly/7t60ldt" />
                            </Col>
                            <Col>
                            <Card.Body>
                            <Card.Title>José Flores</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td className="titleProfile">Email</td>
                                                    <td>josep.plx@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">DOB</td>
                                                    <td>12/08/1993</td>
                                                </tr>
                                            </tbody>
                                        </Table>   
                                    </Col>
                                    <Col>
                                    <Table>
                                            <tbody>
                                                <tr>
                                                    <td className="titleProfile">Gender</td>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Cell Phone</td>
                                                    <td>331 260 4074</td>
                                                </tr>
                                            </tbody>
                                        </Table> 
                                    </Col>

                                </Row>
                            </Card.Text>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                            </Col>
                        </Row>
                        
                        
                    </Card>
                    <div id="spacePatientProfile"></div>
                </div>
   
        );
    }
}

export default PatientProfile;