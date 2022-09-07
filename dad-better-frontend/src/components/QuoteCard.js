import React from "react";
import Card from 'react-bootstrap/Card'

const QuoteCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                    {props.quote}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default QuoteCard