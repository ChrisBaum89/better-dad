import React from "react";
import Quote from "./Quote";
import Logo from "./Logo";

function ProfileHeader(props) {
    return (
        <div className='logo-quote' >
            <Logo />
            <Quote quote={props.quote} />
        </div>
    )
}

export default ProfileHeader