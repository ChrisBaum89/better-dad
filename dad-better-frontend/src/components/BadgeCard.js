import React from "react";
import Card from 'react-bootstrap/Card'
import { useSelector, useDispatch } from 'react-redux'

const BadgeCard = () => {
    
    const currentState = useSelector((state) => state)
    const currentUser = currentState.usersReducer.user[0]
    const dispatch = useDispatch()
    
    
    const checkEarnedBadges = (badge) => {
        return badge.type === "earned_badge"
    }

    const earnedBadges = (currentUser) => {
        if (currentUser !== 0) {
            return currentUser.included.filter(checkEarnedBadges)
        }
    }

    const badges = earnedBadges(currentUser)
    
    return (
        badges.map( badge => {
        <div className="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Body>
                    <Card.Text>
                        {badge.attributes.badge.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        }
    )
    )
}

export default BadgeCard