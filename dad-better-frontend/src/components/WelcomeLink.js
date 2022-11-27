import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

function WelcomeLinks(){
    return(
        <div className="welcome-links-div">
            <ButtonGroup>
                <Button href="/about">About</Button>
            </ButtonGroup>
        </div>
    )
}
export default WelcomeLinks