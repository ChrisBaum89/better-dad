import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

function AboutLinks(){
    return(
        <div className="about-links-div">
            <ButtonGroup>
                <Button variant="custom" href="/" style={{color: "#fff3e1", background: "black"}}>Back</Button>
            </ButtonGroup>
        </div>
    )
}
export default AboutLinks