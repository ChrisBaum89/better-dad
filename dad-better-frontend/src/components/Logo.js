import React from "react";
import Image from "react-bootstrap/Image";
import MyImage from '../img/better-dad-logo.png'

function Logo() {
    return (
        <div className="better-dad-logo">
            <Image src={MyImage} alt="Better Dad" width="100%"></Image>
        </div>
    )
}

export default Logo