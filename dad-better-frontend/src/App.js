import React from 'react';
import './css/App.css';
import ProfileContainer from "./containers/ProfileContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WelcomeContainer from './containers/WelcomeContainer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer';
import About from './components/About';

function App() {

  const currentState = useSelector((state) => state)

  const loggedin = () => {
    const user = currentState.usersReducer.user[0]
    if (user === undefined) {
      return false
    }
    else if (localStorage.jwt === 'undefined') {
      return false
    }
    else if (localStorage.jwt !== 'undefined') {
      return true
    }
    else {
      return false
    }
  }

  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          {loggedin() ? <Redirect to="/profile" /> : <WelcomeContainer />}
        </Route>
        <Route exact path="/profile">
          {loggedin() ? <ProfileContainer /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <div className="site-footer">
          <div className="footer-content">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )

}

export default App;
