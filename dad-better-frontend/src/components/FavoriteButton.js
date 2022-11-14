/* eslint-disable no-restricted-globals */
import React from "react";
import '../css/Tasks.css'

function FavoriteButton() {

    const handleFavoriteClick = () => {
        if (event.target.className == 'fa fa-star') {
            event.target.className = 'fa fa-star checked'
        }
        else {
            event.target.className = 'fa fa-star'
        }
    }

    return (
        <div className={'favorite-star'}>
            <div className="fa fa-star" onClick={handleFavoriteClick}></div>
        </div>
    )
}

export default FavoriteButton