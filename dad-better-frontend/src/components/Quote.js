import React from "react";
import '../css/Quote.css'

const Quote = (props) => {
    return (
        <div className='quote-div'>
            {props.quote.description} - {props.quote.author}
            <br></br><br></br><br></br>
        </div>
    )
}

export default Quote