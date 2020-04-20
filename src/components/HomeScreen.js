import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import '../css/HomeScreen.css';
import descarga1 from '../images/descarga1.png';
import descarga2 from '../images/descarga2.png';
import descarga3 from '../images/descarga3.png';

import mission from '../images/mission.png';
import vision from '../images/vision.png';
import values from '../images/values.png';


class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.descarga1 = React.createRef();
    }
    render() {
        return (
            <div>
            <div className="container d-flex justify-content-center">
                <Row className="row">
                    <Col className="col col-12">
                        <Carousel className="carouselItself">
                            <Carousel.Item className="carouselItself">
                                <img
                                    className="d-block image imageCaroulsel w-100"
                                    src={descarga1}
                                    alt="FirstSlide"
                                />
                                <Carousel.Caption>
                                    <h3>We are specialized</h3>
                                    <p>You'll get somebody who knows what they're doing</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carouselItself">
                                <img
                                    className="d-block image w-100"
                                    src={descarga2}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>We care</h3>
                                    <p>You'll get personalized attention</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carouselItself">
                                <img
                                    className="d-block image w-100"
                                    src={descarga3}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>We are human</h3>
                                    <p>You are important to us, we will treat you humanely</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                           
                        </Carousel>
                    </Col>
                </Row>             
                
            </div>
            <div className="space"></div>
            <div className="container">
                <Row className="col col-12">
                    <Col>
                        <Card >
                            <Card.Img className="belowPicture" variant="top" src={vision} />
                            <Card.Body>
                                <Card.Title>Vision</Card.Title>
                                <Card.Text>
                                Lead the transformation of medical interactions to the virtual environment, to assure sustainability, promoting innovation and adding new available technologies.
                                </Card.Text>
                                <Button variant="primary">Know more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img className="belowPicture" variant="top" src={mission} />
                            <Card.Body>
                                <Card.Title>Mission</Card.Title>
                                <Card.Text>
                                Colaborate to improve population health and quality of life, offering an online platform, being the patient always first and with highly qualified professionals.
                                </Card.Text>
                                <Button variant="primary">Know more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img className="belowPicture" variant="top" src={values} />
                            <Card.Body>
                                <Card.Title>Values</Card.Title>
                                <Card.Text>
                                Always act humanely no matter what, being improving health our main priority and never act against it. Always looking to innovate to be a benefit to the society.
                                </Card.Text>
                                <Button variant="primary">Know more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            </div>
        );
    }

}

export default HomeScreen;