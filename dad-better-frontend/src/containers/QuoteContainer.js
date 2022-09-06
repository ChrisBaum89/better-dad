import React, {Component} from 'react';
import QuoteCard from '../components/QuoteCard';
import {connect} from "react-redux"


class QuoteContainer extends Component {
    
    select_quote = (quotes) => {
        debugger /////HERE!!!!/////HERE!!!!/////HERE!!!!/////HERE!!!!/////HERE!!!!
        return true
    }

    render(){
        this.select_quote(this.props.quotes)
        return (
            <div>
                <QuoteCard />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.usersReducer.users,
      quotes: state.quotesReducer.quotes.data
    }
  }

export default connect(mapStateToProps)(QuoteContainer)