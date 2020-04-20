import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Table } from 'react-bootstrap';
import '../css/DoctorCard.css';
import StarRate from './StarRate.js';

function DoctorCard(props) {



    return (
        <Card className="display-none cardItself col col-8">
            <div className="marginTop15"></div>
            <Row>
                <Col className="col col-8">
                    <Row>
                        <Col className="col col-3">
                            <Card.Img className="doctorCardPhoto" variant="top" src={props.imageSrc} />

                        </Col>
                        <Col >
                            <Row>
                                <Col>
                                    <Card.Text >Dr. {props.name} {props.lastName}</Card.Text>
                                </Col>
                                <Col>
                                    <StarRate levelOfService={props.levelOfService} defaultValues={5} min={0} max={10} step={1} />
                                </Col>
                            </Row>
                            <div className="marginTop15"></div>
                            <Row className="d-flex justify-content-start">
                                <Col>
                                    <Card.Text>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td>Specialty</td>
                                                    <td>{props.specialty}</td>
                                                </tr>
                                                <tr>
                                                    <td>NPI</td>
                                                    <td>{props.npi}</td>
                                                </tr>
                                                <tr>
                                                    <td>Experience</td>
                                                    <td>{props.experience}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Text>
                                </Col>
                                <Card.Text>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Price</td>
                                                <td>{props.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone</td>
                                                <td>{props.phone}</td>
                                            </tr>
                                            <tr>
                                                <td>Languages</td>
                                                <td>{props.languages}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Row>
                            <Row>
                                <Col>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>Location</td>
                                                <td>{props.location}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className="col col-5"></Col>
                <Card></Card>
            </Row>
        </Card>
    )

}

export default DoctorCard;