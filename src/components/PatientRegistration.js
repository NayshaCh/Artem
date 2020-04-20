import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import '../css/PatientRegistration.css';
import { sendDataToRegisterPatient } from '../util/requests.js';
import { specialties } from './Specialties.js';
class PatientRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.txtFirstName = React.createRef();
        this.txtLastName = React.createRef();
        this.txtGender = React.createRef();
        this.txtDOB = React.createRef();
        this.txtPhoneNumber = React.createRef();
        this.txtEmail = React.createRef();
        this.txtPassword = React.createRef();
        this.txtUserTypeDoctor = React.createRef();
        this.txtUserTypePatient = React.createRef();
        this.txtSpecialty = React.createRef();
        this.txtNPI = React.createRef();
        this.txtAddress = React.createRef();
        this.txtExperience = React.createRef();
        this.txtPrice = React.createRef();
        this.txtLanguages = React.createRef();
        var contador=1;
    }

    submitPatientInfo = e => {
        var txtFirstName = this.txtFirstName.current.value;
        var txtLastName = this.txtLastName.current.value;
        var txtGender = this.txtGender.current.value;
        var txtDOB = this.txtDOB.current.value;
        var txtPhoneNumber = this.txtPhoneNumber.current.value;
        var txtEmail = this.txtEmail.current.value;
        var txtPassword = this.txtPassword.current.value;
        var txtUserTypeDoctor = this.txtUserTypeDoctor.current.value;
        var txtUserTypePatient = this.txtUserTypePatient.current.value;
        var txtSpecialty = this.txtSpecialty.current.value;
        var txtNPI = this.txtNPI.current.value;
        var txtAddress = this.txtAddress.current.value;
        var txtExperience = this.txtExperience.current.value;
        var txtPrice = this.txtPrice.current.value;
        var txtLanguages = this.txtLanguages.current.value;
        
        this.setState(state => ({
            name: txtFirstName,
            last_name: txtLastName,
            email: txtEmail,
            gender: txtGender,
            dob: txtDOB,
            password: txtPassword,
            phone_number: txtPhoneNumber,
            userTypeDoctor: txtUserTypeDoctor,
            userTypePatient: txtUserTypePatient,
            specialty: txtSpecialty,
            npi: txtNPI,
            location: txtAddress,
            experience: txtExperience,
            price: txtPrice,
            languages: txtLanguages
        }));
        
        
        
        console.log(this.state);
        
    }
    

    showDoctorPart() {
        var doctorPart = document.getElementById("sectionForDoctor");
        doctorPart.classList.remove("d-none");
        console.log("si lo hace");
        var profilePic = document.getElementById("patientProfilePicture");
        profilePic.src = "https://image.freepik.com/vector-gratis/doctor-icono-o-avatar-blanco_136162-58.jpg";
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
            <Form onSubmit={this.submitPatientInfo} id="formPatient" className="col col-sm-12 col-lg-7">
                <Form.Group className="firstContainer">
                    <Form.Text id="firstSignPatient">Create your free account</Form.Text>
                    <Form.Text id="secondSignPatient"><a href="/login">Already have an account? ></a> </Form.Text>
                </Form.Group>
                <div className="spaceRegister"></div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image id="patientProfilePicture" src="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" roundedCircle />
                        </Col>
                        <Col>
                            <div className="row spaceRegister2"></div>
                            <Form.File id="custom-file" label="Upload your profile picture" custom />
                        </Col>
                    </Row>
                </Container>
                <div className="spaceRegister"></div>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control type="text" size="lg" placeholder="First name" ref={this.txtFirstName} />
                        </Col>
                        <Col>
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control type="text" size="lg" placeholder="Last name" ref={this.txtLastName} />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Date of Birth *</Form.Label>
                            <Form.Control ref={this.txtDOB} type="date" size="lg"></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Gender *</Form.Label>
                            <Form.Control ref={this.txtGender} as="select" size="lg">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cell Phone Number *</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="e.g. 123 456 7890" ref={this.txtPhoneNumber} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Are you? *{'   '}</Form.Label>
                    <div id="spaceForRadio"></div>
                    <Form.Check ref={this.txtUserTypePatient} inline custom type="radio" id="custom-radio" label="Patient" />
                   
                    <Form.Check ref={this.txtUserTypeDoctor}  onClick={this.showDoctorPart} inline custom type="radio"  id="custom-radio2" label="Doctor" />
                </Form.Group>
            <div id="sectionForDoctor" className="d-none">
                <Form.Group>
                    <Form.Label>Specialty *</Form.Label>
                    <Form.Control ref={this.txtSpecialty} as="select" size="lg">
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
                    <Form.Control type="text" ref={this.txtNPI} size="lg" placeholder="12345678" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location *</Form.Label>
                    <Form.Control type="text" ref={this.txtAddress} size="lg" placeholder="Enter your Address" />
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Experience *</Form.Label>
                            <Form.Control type="text" ref={this.txtExperience} size="lg" placeholder="Years" />
                        </Col>
                        <Col>
                            <Form.Label>Consulting Price *</Form.Label>
                            <Form.Control type="text" ref={this.txtPrice} size="lg" placeholder="$" />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Languages *</Form.Label>
                    <Form.Control type="text" ref={this.txtLanguages} size="lg" />
                </Form.Group>
            </div>
            <Form.Group>
                <Form.Label>e-mail *</Form.Label>
                <Form.Control type="email" size="lg" placeholder="example@domain.com" ref={this.txtEmail} />
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label>Create Password *</Form.Label>
                        <Form.Control type="password" size="lg" />
                    </Col>
                    <Col>
                        <Form.Label>Confirm Password *</Form.Label>
                        <Form.Control type="password" size="lg" ref={this.txtPassword} />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group>
                <Button variant="primary" onClick={this.submitPatientInfo}>Create my account</Button>
            </Form.Group>
            <hr />
            <Form.Text className="text-muted">* Mandatory Field </Form.Text>
            </Form >
            </div>
        );
    }
}

export default PatientRegistration;