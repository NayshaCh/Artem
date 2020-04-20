import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col} from 'react-bootstrap';
import '../css/SearchDoctor.css';
import DoctorCardList from './DoctorCardsList';
import { findDoctors } from '../util/requests';
import {specialties} from './Specialties.js';
class SearchDoctor extends React.Component {

    constructor(props) {
        super(props);
        this.txtDoctorSpecialty = React.createRef();
        this.state = {
            doctors: []
        };
    }

    handleOnSubmitSearch = (e) => {
        e.preventDefault();
        var element = document.getElementById("divElement");
        var element2 = document.getElementById("targetSearchThing");
        element2.classList.remove("SearchEnvironment");
        var elements = document.getElementsByClassName("cardItself");
        var counter=0;
        
        
        findDoctors(this.txtDoctorSpecialty.current.value, this.addDoctors);
        this.applyDisplayNone(elements);
      }
      applyDisplayNone(elements){
          var element=0;
          var counter=0;
        for(element of elements){
            elements[counter].classList.remove("display-none");
            counter++;
        }
      }
      addDoctors = (physicians) => {
        
          this.setState(state => ({
              doctors: physicians
          }));
        
         
      }
      
    render() {

        return (
            <div id="targetSearchThing" className="container-fluid SearchEnvironment">

                <Row>
                    <Col>
                        <Form className="col col-6 formSearch">
                            <div id="divElement" className="row "></div>
                            <Row>
                                
                                <Col>
                                <Form.Group>
                    <Form.Label>Specialty *</Form.Label>
                    <Form.Control ref={this.txtDoctorSpecialty} as="select">
                        {
                            specialties.map(item=>{
                                return(
                                <option value={item}>{item}</option>
                                );
                            })
                        }
                    </Form.Control>
                </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="col col-2">
                                        <Form.Label>.</Form.Label>
                                        <Button variant="primary" type="submit" onClick={this.handleOnSubmitSearch}>Submit</Button>
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                
                    {
                        this.state.doctors.map(item =>{
                            return(
                                <DoctorCardList
                                name={item.name}
                                lastName={item.last_name}
                                levelOfService={item.levelOfService}
                                imageSrc={item.imageSrc}
                                specialty={item.specialty}
                                npi={item.npi}
                                experience={item.experience}
                                price={item.price}
                                phone={item.phone_number}
                                languages={item.languages}
                                location={item.location}
                                key={item.id}
                                />
                            );
                        })
                    }
               <div id="spaceForDoctorSearch"></div>
            </div>
        );
    }
}

export default SearchDoctor;
