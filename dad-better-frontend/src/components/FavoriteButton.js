/* eslint-disable no-restricted-globals */
import React from "react";
import '../css/Tasks.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from "../actions/userActions";

function FavoriteButton(props) {
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user
    const dispatch = useDispatch()
    const jwtToken = localStorage.jwt

    const updateUserToServer = (user, taskId) => {
        const [username, password, nameUser, email, existingPassword, newPassword, message] = ''
        const userId = user.data.id
        const updateType = 'task_favorited'
        const dispatchType = "UPDATE_USER"
        const fetchUrl = "http://localhost:3000/updateuser"
        dispatch(fetchUser(
            userId, 
            username, 
            password, 
            email, 
            nameUser, 
            existingPassword, 
            newPassword, 
            message,
            updateType,
            taskId,
            dispatchType,
            fetchUrl,
            )
        )
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