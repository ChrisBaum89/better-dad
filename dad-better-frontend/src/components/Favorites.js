import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import '../css/Tasks.css'
import Card from 'react-bootstrap/Card'

function Favorites() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()

    const checkFavoriteTask = (task) => {
        return task.attributes.favorite === true
    }

    const getFavorites = (currentUser) => {
        if (currentUser !== 0) {
            return currentUser.included.filter(checkFavoriteTask)
        }
        else {
            return []
        }
    }

    const userFavoriteTasks = getFavorites(currentUser)

    const userFavoriteTask = (task) => {
        return(
        <div className="col d-flex justify-content-center">
            <Card style={{ width: '36rem' }} >
                <Card.Body class='completed-card-body'>
                    <Card.Title class='completed-card-title'>
                        {task.attributes.task.description}
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
        )
    }

    return (
        userFavoriteTasks.map(userFavoriteTask)
    )


}

export default Favorites