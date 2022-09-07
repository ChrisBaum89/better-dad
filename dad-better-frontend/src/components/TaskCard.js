import React from "react";
import Card from 'react-bootstrap/Card'

const TaskCard = (props) => {
    //need to send 3 tasks in through props from Container and generate 3 cards
    
    return (
        <div className="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} >
                <Card.Body>
                    <Card.Text>
                        TaskCard
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TaskCard