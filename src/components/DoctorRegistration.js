import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Container, Row, Image, FormControl, Modal } from 'react-bootstrap';
import '../css/DoctorRegistration.css';
import { sendDataToRegisterDoctor } from '../util/requests.js';
import { specialties } from './Specialties.js';

class DoctorRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.txtDoctorFirstName = React.createRef();
        this.txtDoctorLastName = React.createRef();
        this.txtDoctorPhoneNumber = React.createRef();
        this.txtDoctorEmail = React.createRef();
        this.txtDoctorSpecialty = React.createRef();
        this.txtDoctorNPI = React.createRef();
        this.txtDoctorAddress = React.createRef();
        this.txtDoctorExperience = React.createRef();
        this.txtDoctorPrice = React.createRef();
        this.txtDoctorLanguages = React.createRef();
        this.txtDoctorPassword = React.createRef();
        this.txtDoctorPassword1 = React.createRef();
        this.txtDoctorDOB = React.createRef();
        this.txtDoctorGender = React.createRef();
    }

    submitDoctorInfo = e => {
        e.preventDefault();
        var txtDoctorPassword = this.txtDoctorPassword.current.value;
        var txtDoctorPassword1 = this.txtDoctorPassword1.current.value;
        var result = this.validatePassword(txtDoctorPassword, txtDoctorPassword1);
        if (result) {
            var txtDoctorFirstName = this.txtDoctorFirstName.current.value;
            var txtDoctorLastName = this.txtDoctorLastName.current.value;
            var txtDoctorPhoneNumber = this.txtDoctorPhoneNumber.current.value;
            var txtDoctorEmail = this.txtDoctorEmail.current.value;
            var txtDoctorSpecialty = this.txtDoctorSpecialty.current.value;
            var txtDoctorNPI = this.txtDoctorNPI.current.value;
            var txtDoctorAddress = this.txtDoctorAddress.current.value;
            var txtDoctorExperience = this.txtDoctorExperience.current.value;
            var txtDoctorPrice = this.txtDoctorPrice.current.value;
            var txtDoctorLanguages = this.txtDoctorLanguages.current.value;
            txtDoctorPassword = this.txtDoctorPassword.current.value;
            var txtDoctorDOB = this.txtDoctorDOB.current.value;
            var txtDoctorGender = this.txtDoctorGender.current.value;

            this.setState(state => ({
                name: txtDoctorFirstName,
                last_name: txtDoctorLastName,
                email: txtDoctorEmail,
                gender: txtDoctorGender,
                dob: txtDoctorDOB,
                password: txtDoctorPassword,
                phone_number: txtDoctorPhoneNumber,
                specialty: txtDoctorSpecialty,
                npi: txtDoctorNPI,
                location: txtDoctorAddress,
                experience: txtDoctorExperience,
                languages: txtDoctorLanguages,
                price: txtDoctorPrice
            }));

            sendDataToRegisterDoctor(this.state);
        }
    }
    validatePassword(password1, password2) {
        var result;
        if (password1 === password2) {
            result = true;
        } else {
            result = false;
            this.Example();
        }
        return result;
    }
    Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        
        );
      }
    render() {

        return (
            <div>
            <Form className="col col-sm-12 col-lg-7 formDoctor" onSubmit={this.submitDoctorInfo}>
                <Form.Group className="firstContainer">
                    <Form.Text id="firstSignDoctor">Create your free account as a Physician </Form.Text>
                    <Form.Text id="secondSignDoctor"><a href="/">Register as a patient ></a> </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image id="doctorProfilePic" src="https://image.freepik.com/vector-gratis/doctor-icono-o-avatar-blanco_136162-58.jpg" rounded />
                            </Col>
                            <Col>
                                <div className="row space2"></div>
                                <Form.File id="custom-file" label="Upload your profile picture" custom />
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control type="text" ref={this.txtDoctorFirstName} size="lg" placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control type="text" ref={this.txtDoctorLastName} size="lg" placeholder="Last name" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Date of Birth *</Form.Label>
                            <FormControl type="date" size="lg" ref={this.txtDoctorDOB} />
                        </Col>
                        <Col>
                            <Form.Label>Gender *</Form.Label>
                            <Form.Control ref={this.txtDoctorGender} as="select" size="lg">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cell Phone Number *</Form.Label>
                    <Form.Control type="text" ref={this.txtDoctorPhoneNumber} size="lg" placeholder="e.g. 123 456 7890" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>e-mail *</Form.Label>
                    <Form.Control type="text" ref={this.txtDoctorEmail} size="lg" placeholder="example@domain.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Specialty *</Form.Label>
                    <Form.Control ref={this.txtDoctorSpecialty} as="select" size="lg">
                        {
                            specialties.map(item => {
                                return (
                                    <option value={item}>{item}</option>
                                );
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>NPI *</Form.Label>
                    <Form.Control type="text" ref={this.txtDoctorNPI} size="lg" placeholder="12345678" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location *</Form.Label>
                    <Form.Control type="text" ref={this.txtDoctorAddress} size="lg" placeholder="Enter your Address" />
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Experience *</Form.Label>
                            <Form.Control type="text" ref={this.txtDoctorExperience} size="lg" placeholder="Years" />
                        </Col>
                        <Col>
                            <Form.Label>Consulting Price *</Form.Label>
                            <Form.Control type="text" ref={this.txtDoctorPrice} size="lg" placeholder="$" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Languages *</Form.Label>
                    <Form.Control type="text" ref={this.txtDoctorLanguages} size="lg" />
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Create Password *</Form.Label>
                            <Form.Control type="password" ref={this.txtDoctorPassword1} size="lg" />
                        </Col>
                        <Col>
                            <Form.Label>Confirm Password *</Form.Label>
                            <Form.Control type="password" ref={this.txtDoctorPassword} size="lg" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" onClick={this.submitDoctorInfo}>Create my account</Button>
                </Form.Group>
                <hr />
                <Form.Text className="text-muted">* Mandatory Field </Form.Text>
            </Form>

          </div>
        );
    }
}

export default DoctorRegistration;