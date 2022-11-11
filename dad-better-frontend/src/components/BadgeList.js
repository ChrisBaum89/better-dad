import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { useSelector, useDispatch } from 'react-redux'
import star_background from '../img/star_background.jpeg'
import '../css/Badges.css'

const BadgeList = () => {

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


    if (badges.length > 0){
    return (
        <div class="badge-carousel">
            <div class="badge-title">
                <h2>Badges</h2>
            </div>
                <Carousel>
                {badges.map(badge => {
                    return (
                        <Carousel.Item interval={10000000}>
                            <img
                                className="d-block w-100"
                                src={star_background}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div class="badge-carousel-caption">
                                    <h6>{badge.attributes.badge.name}</h6>
                                    <p>{badge.attributes.badge.description}</p>
                                    <img src={badge.attributes.badge.image}></img>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
            } else{
                return <h2>No Badges</h2>
            }

}

export default BadgeList
