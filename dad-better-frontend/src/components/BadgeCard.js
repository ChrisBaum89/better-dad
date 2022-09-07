import React from "react";
import Card from 'react-bootstrap/Card'

const BadgeCard = (props) => {
    return (
        <div class="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} class="mx-auto">
                <Card.Body>
                    <Card.Text>
                        Badge Card
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BadgeCard