import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { connect } from "react-redux";
import { fetchUsers } from "./actions/userActions";
import { fetchQuotes } from "./actions/quoteActions"
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";
import Image from 'react-bootstrap/Image'
import MyImage from './img/better-dad-logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WelcomeContainer from './containers/WelcomeContainer';

function App() {


  return (
    <Router>
      <div className="app">
        <div className="better-dad-logo">
          <Image src={MyImage} alt="Better Dad" display="inline-block"></Image>
        </div>

        <Route exact path="/" component={WelcomeContainer} />
        <Route exact path="/profile" component={ProfileContainer} />

      </div>
    </Router>
  )

}

export default App;
