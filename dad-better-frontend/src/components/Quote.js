import React from "react";
import '../css/App.css'

const Quote = (props) => {
    return (
        <div className='quote-div' float="right">
            "{props.quote.description}" - {props.quote.author}
        </div>
    )
}

export default Quote