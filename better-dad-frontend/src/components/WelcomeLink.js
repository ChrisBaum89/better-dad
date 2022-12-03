import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

function WelcomeLinks() {
    return (
        <div className="welcome-links-div">
            <ButtonGroup>
                <Button variant="custom" href="/about" style={{color: "#fff3e1", background: "black"}}>About</Button>
            </ButtonGroup>
        </div>
    )
}
export default WelcomeLinks