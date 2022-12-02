import React from "react";
import Image from "react-bootstrap/Image";
import MyImage from '../img/better-dad-logo.png'

function Logo() {
    return (
        <div className="better-dad-logo-div">
            <Image className="better-dad-logo" src={MyImage} alt="Better Dad"></Image>
        </div>
    )
}

export default Logo