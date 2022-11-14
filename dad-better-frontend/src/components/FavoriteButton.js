/* eslint-disable no-restricted-globals */
import React from "react";
import '../css/Tasks.css'
import { useSelector, useDispatch } from 'react-redux';

function FavoriteButton(props) {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()
    const jwtKey = currentState.usersReducer.user[0].jwt

    const updateUserToServer = (user, taskId) => {
        fetch("http://localhost:3000/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                user: {
                    user_id: user.data.id,
                    task_id: taskId,
                    update_type: "task_favorited",
                },
                jwt: {
                    jwt: jwtKey,

                }
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                dispatch({ type: "UPDATE_USER", payload: data })
            })
    }

    const handleFavoriteClick = (user, taskId) => {
        if (event.target.className === 'fa fa-star') {
            event.target.className = 'fa fa-star checked'
        }
        else {
            event.target.className = 'fa fa-star'
        }
        updateUserToServer(user, taskId)
    }

    const buttonLoad = (task) => {
        if (task.attributes.favorite){
            return <div className="fa fa-star checked" onClick={() => {handleFavoriteClick(currentUser, props.task.id)}}></div>
        }
        else{
            return <div className="fa fa-star" onClick={() => {handleFavoriteClick(currentUser, props.task.id)}}></div>
        }
    }

    return (
        <div className="favorite-star">
            <div className={`favorite-star-${props.task.id}`}>
                {buttonLoad(props.task)}
            </div>
        </div>
    )
}

export default FavoriteButton