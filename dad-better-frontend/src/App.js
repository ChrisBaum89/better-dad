import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {fetchUsers} from "./actions/userActions";
import LoginContainer from "./containers/LoginContainer";
import UserContainer from "./containers/UserContainer";
import BadgeContainer from "./containers/BadgeContainer";
import QuoteContainer from "./containers/QuoteContainer";
import TaskContainer from './containers/TaskContainer';
import NavigationContainer from './containers/NavigationContainer';

class App extends Component {
  
  componentDidMount(){
    this.props.fetchUsers()
  }
  
  render() {
    return(
    <div className="App">
      <header>
        <h1>Dad Better</h1>
        <LoginContainer />
       
      </header>
      <body>
      <UserContainer />
      <BadgeContainer />
      <QuoteContainer />
      <TaskContainer />
      </body>
      <footer>
        <NavigationContainer />
      </footer>
    </div>
)}}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchUsers})(App);
