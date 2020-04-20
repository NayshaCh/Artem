import React from "react"
// import the LocationSearchInput
import LocationSearchInput from './LocationSearchInput'

class ReportForm extends React.Component {
  // Set up a state to help pass data back to the parent App component
  constructor(){
    super()
    this.state = {
      cityLoc: '',
      stateLoc: ''
    }
  }

  // Get the info from the LocationSearchInput component and save
  // it to state here in ReportForm.
  setFormLocation = (googleLocation) => {
    // The Google result comes back as a comma-separated string:
    // "Austin, TX, USA". Parse it into usable data.
    let parsedLoc = googleLocation.split(', ')
    this.setState({
      cityLoc: parsedLoc[0],
      stateLoc: parsedLoc[1]
    })
  }

  // Process the form submission with the info that was just
  // saved to ReportForm.state
  createReportLocation = (e) => {
    e.preventDefault()
    const inputLocation = {
      cityLoc: this.state.cityLoc,
      stateLoc: this.state.stateLoc
    }
    // Call the parent App component's setReportLocation function, which
    // sets App.state. so that all other components will have access to it.
    this.props.setReportLocation(inputLocation)
  }

  // Render the form
  render(){
    return (
      // Set the form submission handler to createReportLocation
      <form onSubmit={this.createReportLocation}  className="card card-body mb-3">
        <div className="row">
          <div className="col-sm-12">
            <p>Enter a US City</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10">
            // Pass the setFormLocation function as a prop to be called
            // in the LocationSearchInput component.
            <LocationSearchInput setFormLocation={this.setFormLocation}/>
          </div>

          <div className="col-sm-2">
            <button type="submit" className="btn btn-xs btn-primary">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default ReportForm