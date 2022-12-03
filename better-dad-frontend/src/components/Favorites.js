import React from 'react';
import { useSelector } from 'react-redux'
import '../css/Tasks.css'
import Card from 'react-bootstrap/Card'
import FavoriteButton from './FavoriteButton';

function Favorites() {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user

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
        <div className="col d-flex justify-content-center" key={`favorited-card-${task.id}`}>
            <Card style={{ width: '36rem', background:"black", color: "#fff3e1", margin: "1%",}} >
                <Card.Body class='completed-card-body'>
                <FavoriteButton task={task}/>
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