/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
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
        updateUserToServer(user, taskId)
    }

    const buttonLoad = (task) => {
        let starClassName = ""
        if (task.attributes.favorite){
            starClassName = 'fa fa-star checked'
        }
        else{
            starClassName = 'fa fa-star'
        }
        return <div className={starClassName} onClick={() => {handleFavoriteClick(currentUser, props.task.id)}}></div>
    }

    const checkJoke = (task) => {
        if (task.attributes.task.category === "joke"){
            return buttonLoad(task)
        }
    }

    return (
        <div className="favorite-star">
            <div className={`favorite-star-${props.task.id}`}>
                {checkJoke(props.task)}
            </div>
        </div>
    )
}

export default FavoriteButton