import React from "react";
import '../css/App.css'

const Quote = (props) => {
    return (
        <div className='quote-div'>
            <div className="quote-content-div">
                <div className="quote-text">
                <p>"{props.quote.description}" - {props.quote.author}</p>
                </div>
            </div>
        </div>
    )
}

export default Quote