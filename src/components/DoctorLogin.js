import React from 'react';
import Artem from "../Artem.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import '../css/Login.css';

class DoctorLogin extends React.Component {
    constructor(props){
        super(props);
        this.txtEmail = React.createRef();
        this.txtpassword = React.createRef();
        this.userDoctor = React.createRef();
        this.userPatient = React.createRef();
        this.userDoctor = "naysha.chire@artem.com";
        this.userPatient = "josep.plx@gmail.com";
   
    }
    LoginAsUser= (props) => {
        var email = this.txtEmail.current.value;
        if( email == this.userDoctor){
            console.log("entra al if");
            window.location.href="/doctorscreen";
        }else if(email == this.userPatient){
            console.log("entra al if else");
            window.location.href="/patientscreen";
        }
        console.log("email field" + email);
        console.log("userPAtient"+ this.userPatient);
        console.log("userDoctor" + this.userDoctor);
        console.log("minimo entra a la funcion");
    }
    render() {
        return (
            <div id="backgroundLogin" className="container-fluid">
                <div className="col ">
                    <div className="row spaceLogin"></div>
                    <div className="row justify-content-center">
                        <Form className="loginForm col-lg-4 col-10">
                            <Form.Group className="row justify-content-center">
                                <img className="logoLogin" src={Artem} alt="holio" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="labelLogin">Email address</Form.Label>
                                <Form.Control ref={this.txtEmail} type="email" placeholder="Enter email" name="email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="labelLogin">Password</Form.Label>
                                <Form.Control ref={this.txtpassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <Button size="lg" variant= "primary" href= {this.reference} onClick={this.LoginAsUser} className="col-12">Login</Button>
                            <Form.Group controlId="formBasicCheckbox">
                                <a className="font-small col-12 justify-content-center d-flex" href="/">Forgot your password?</a>

                            </Form.Group>
                            <Form.Text><a className="font-small" href={this.reference}>You don't have an account? Register now.</a></Form.Text>
                        </Form>
                        
                    </div>
                    
                </div>
             
            </div>
        );
    }
}

export default DoctorLogin;