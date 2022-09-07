import React, {Component} from 'react';
import QuoteCard from '../components/QuoteCard';
import {connect} from "react-redux"


class QuoteContainer extends Component {
    
    select_quote = (quotes) => {
        if (quotes !== undefined){
            const quoteIndex = Math.floor(Math.random() * quotes.length)
            const selectedQuote = quotes[quoteIndex].attributes.description
            return selectedQuote
        }
        
        return []
    }

    render(){
        const quote = this.select_quote(this.props.quotes)
        return (
            <div className = "quote-container">
                <QuoteCard quote={quote}/>
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