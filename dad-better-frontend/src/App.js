import React from 'react';
import './css/App.css';
import ProfileContainer from "./containers/ProfileContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WelcomeContainer from './containers/WelcomeContainer';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer';

function App() {

  const currentState = useSelector((state) => state)
  const dispatch = useDispatch()

  const loggedin = () => {
    const user = currentState.usersReducer.user[0]
    if (user !== undefined && user.message === "Valid Login"){
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
