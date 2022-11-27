import React from "react";
import Card from 'react-bootstrap/Card'
import '../css/UserCard.css'

const UserCard = (props) => {
    return (
        <div className="user-card">
            <div className="col d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="user-image" variant="top" src={props.picture} />
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
    )
}

export default UserCard