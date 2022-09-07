import React from "react";
import Card from 'react-bootstrap/Card'

const BadgeCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Text>
                Badge Card
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default BadgeCard