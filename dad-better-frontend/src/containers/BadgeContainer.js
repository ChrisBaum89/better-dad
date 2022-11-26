import React from "react";
import { useSelector } from 'react-redux'
import '../css/Badges.css'
import BadgeList from "../components/BadgeList";

function BadgeContainer () {

    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0].user

    const checkEarnedBadges = (badge) => {
        return badge.type === "earned_badge"
    }

    const earnedBadges = (currentUser) => {
        if (currentUser !== 0) {
            return currentUser.included.filter(checkEarnedBadges)
        }
    }

    const badges = earnedBadges(currentUser)
debugger
    return(
        <div>
            <BadgeList badges={badges}/>
        </div>
    )

}

export default BadgeContainer
