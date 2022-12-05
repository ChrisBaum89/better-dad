import React from 'react';
import './css/App.css';
import ProfileContainer from "./containers/ProfileContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WelcomeContainer from './containers/WelcomeContainer';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';
import { sendLoginToServer } from './actions/userActions';

function App() {

  const currentState = useSelector((state) => state)
  const dispatch = useDispatch()

  const jwtPresent = (jwtToken) => {
    return (jwtToken !== "") && (jwtToken !== "undefined") ? true : false
  }

  const startFetch = () => {
    if (currentState.usersReducer.requesting === false) {
      dispatch(sendLoginToServer(localStorage.jwt))
    }
  }

  const loggedin = () => {
    const user = currentState.usersReducer.user[0]
    if (user === undefined) {
      if (jwtPresent(localStorage.jwt)) {
        startFetch()
        return true
      }
      else {
        dispatch({ type: "INITIALIZE" })
        return false
      }
    }
    else if ((localStorage.jwt !== '') && (user !== undefined)) {
      return true
    }

    else if (user !== undefined && localStorage.jwt !== "") {
      return true
    }
    else {
      return false
    }
  }

  if (currentState.usersReducer.requesting === false || currentState.usersReducer.user[0] !== undefined) {
    return (
      <Router>
        <div className="app">
          <div>
            <Route exact path="/">
              {loggedin() ? <Redirect to="/profile" /> : <WelcomeContainer />}
            </Route>
            <Route exact path="/profile">
              {loggedin() ? <ProfileContainer /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </div>
        </div>
      </Router>
    )
  }
  else {
    return <div className="loading-div" style={{ color: "#fff3e1", }}>
      <div className="loading-div-content">
        <h1>Loading...</h1>
      </div>
    </div>
  }

}

export default App;
