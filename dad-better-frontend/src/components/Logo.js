import React from "react";
import Image from "react-bootstrap/esm/Image";
import Quote from "./Quote";
import MyImage from '../img/better-dad-logo.png'

function Logo(props) {
    return (
        <div>
            <div className='logo-quote'>
                <div className="better-dad-logo">
                    <Image src={MyImage} alt="Better Dad" display="inline-block"></Image>
                    <Quote quote={props.quote} />
                </div>
            </div>
        </div>
    )
}

export default Logo