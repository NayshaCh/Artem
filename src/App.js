import React from 'react';
import './App.css';
import PatientRegistration from './components/PatientRegistration.js';
import DoctorRegistration from './components/DoctorRegistration.js';
import DoctorLogin from './components/DoctorLogin.js';
import HomeScreen from './components/HomeScreen.js';
import TopNavBar from './components/TopNavBar';
import SearchDoctor from './components/SearchDoctor.js';
import PatientProfile from './components/PatientProfile.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavBar from './components/BottomNavBar.js';
import Calendar from './Calendar/Calendar.js';

function App() {
  return(
    <div>
   
      <div id="mainContainer">
      <TopNavBar />
      
      <Router>
        <Switch>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/register">
            <PatientRegistration />
          </Route>
          <Route path="/doctorregister">
            <DoctorRegistration />
          </Route>
          <Route path="/login">
            <DoctorLogin />
          </Route>
          <Route path="/doctorsearch">
            <SearchDoctor />
          </Route>
          <Route path="/patientprofile">
            <PatientProfile />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
          <HomeScreen />
          </Route>
          
          
          
        </Switch>
      </Router>
      <BottomNavBar />

    </div>
    </div>
  );
}

export default App;
