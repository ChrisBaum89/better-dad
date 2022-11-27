import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

function AboutLinks(){
    return(
        <div className="about-links-div">
            <ButtonGroup>
                <Button href="/">Back</Button>
            </ButtonGroup>
        </div>
    )
}
export default AboutLinks