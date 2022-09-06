import React, { Component } from 'react';
import UserCard from '../components/UserCard';
import {connect} from "react-redux"

class UserContainer extends Component {
    render() {
        return (
            <div>
                <UserCard />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.usersReducer.users,
      quote: state.quotesReducer.quotes.data
    }
  }

export default connect(mapStateToProps)(UserContainer)