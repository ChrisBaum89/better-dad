import React from "react";
import Card from 'react-bootstrap/Card'

const QuoteCard = (props) => {
    return (
        <div class="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Text>
                        {props.quote}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuoteCard