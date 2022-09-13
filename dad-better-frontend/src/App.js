import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { connect } from "react-redux";
import { fetchUsers } from "./actions/userActions";
import { fetchQuotes } from "./actions/quoteActions"
import LoginContainer from "./containers/LoginContainer";
import UserContainer from "./containers/UserContainer";
import BadgeContainer from "./containers/BadgeContainer";
import QuoteContainer from "./containers/QuoteContainer";
import TaskContainer from './containers/TaskContainer';
import NavigationContainer from './containers/NavigationContainer';
import Image from 'react-bootstrap/Image'
import MyImage from './img/better-dad-logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <div className="app">
        <div className="better-dad-logo">
          <Image src={MyImage} alt="Better Dad" display="inline-block"></Image>
        </div>
        <div className="login-container">
        <Route exact path="/" render={() => <LoginContainer handleShow={handleShow}/>}/>
          {/* <LoginContainer handleShow={handleShow} /> */}
        </div>

        <Route exact path="/profile" component={UserContainer} />
        <Route exact path="/profile" component={BadgeContainer} />
        <Route exact path="/profile" component={QuoteContainer} />
        <Route exact path="/profile" component= {TaskContainer} />
        <NavigationContainer />
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Signup</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Signup />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </Router>
  )

}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    quote: state.quotesReducer.quotes.data
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchQuotes })(App);
