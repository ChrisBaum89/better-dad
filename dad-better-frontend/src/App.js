import React from 'react';
import './css/App.css';
import ProfileContainer from "./containers/ProfileContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WelcomeContainer from './containers/WelcomeContainer';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';

function App() {

  const currentState = useSelector((state) => state)
  const dispatch = useDispatch()

  const jwtPresent = (jwtToken) =>{
    return jwtToken !== "" ? true: false
  }

  const sendLoginToServer = (jwtToken) => {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${jwtToken}`,
            Accept: "application/json",
        },
        body: JSON.stringify({
            user: {
                message: "user login with JWT"
            },
        }),
    })
        .then((r) => r.json())
        .then((data) => {
            localStorage.setItem("jwt", data.jwt)
            dispatch({ type: "LOGIN_USER", payload: data })
        })
}

  const loggedin = () => {
    const user = currentState.usersReducer.user[0]
    if (user === undefined) {
      if (jwtPresent(localStorage.jwt)){
        if (user !== undefined){
          return true
        }
        else{
          sendLoginToServer(localStorage.jwt)
          return false
        }
      }
      else {
        dispatch({type: "INITIALIZE"})
        return false
      }
    }
    else if ((localStorage.jwt !== '') && (user !== undefined)) {
      return true
    }
    else {
      return false
    }
  }

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

export default App;
