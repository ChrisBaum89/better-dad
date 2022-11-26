import React from "react";
import Card from 'react-bootstrap/Card'
import '../css/UserCard.css'

const UserCard = (props) => {
    return (
        <div className="user-card">
            <div className="col d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="user-image" variant="top" src="https://c8.alamy.com/comp/2J7983E/dad-pixel-art-vector-illustration-father-day-image-or-clip-art-2J7983E.jpg" />
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