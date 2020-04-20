import React from 'react';
import DoctorCard from './DoctorCard.js';

class DoctorCardList extends React.Component {
  constructor(props){
    super(props);
     
    
    
  }
  

  
  render() {
    return (
      <div>

       
          
  
     
                <DoctorCard
                  name={this.props.name}
                  lastName={this.props.lastName}
                  levelOfService={this.props.levelOfService}
                  imageSrc={this.props.imageSrc}
                  specialty={this.props.specialty}
                  npi={this.props.npi}
                  experience={this.props.experience}
                  price={this.props.price}
                  phone={this.props.phone}
                  languages={this.props.languages}
                  location={this.props.location}
                  key={this.props.npi}
                  levelOfService={5}
                />
 
          
    
        
      </div>
    );
  }
}

export default DoctorCardList;