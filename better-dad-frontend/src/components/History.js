import React from 'react';
import CompletedTaskCard from './CompletedTasksCard';
import Offcanvas from 'react-bootstrap/Offcanvas';

function History(props) {
    return (
        <Offcanvas show={props.showHistory} onHide={props.handleHistoryClose} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <div className="offcanvas-title">
                        Completed Tasks
                    </div>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <CompletedTaskCard />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default History