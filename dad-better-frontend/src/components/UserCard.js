import React from "react";
import Card from 'react-bootstrap/Card'
import '../css/UserCard.css'

const UserCard = (props) => {
    return (
        <div className="user-card">
            <div className="col d-flex justify-content-center">
                <div className="user-card-div">
                <Card style={{ width: '18rem', color:"black", background: "#fff3e1", }}>
                    <Card.Img className="user-image" variant="top" src={props.picture} />
                    <div className="badge-title-content-divider"></div>
                    <Card.Body>
                        <Card.Text>
                            Username: {props.username}
                        </Card.Text>
                        <Card.Text>
                            Score:  {props.score}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default UserCard