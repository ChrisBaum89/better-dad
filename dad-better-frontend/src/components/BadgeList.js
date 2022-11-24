import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { useSelector } from 'react-redux'
import star_background from '../img/star_background.jpeg'
import '../css/Badges.css'

const BadgeList = () => {

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


    if (badges.length > 0) {
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
                                        <img class='badge-image' src={badge.attributes.badge.image} alt=''></img>
                                        <h6>{badge.attributes.badge.name}</h6>
                                        <p>{badge.attributes.badge.description}</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        )
    } else {
        return (
            <div class="badge-carousel">
                <div class="badge-title">
                    <h2>Badges</h2>
                </div>
                <Carousel>
                    <Carousel.Item interval={10000000}>
                        <img
                            className="d-block w-100"
                            src={star_background}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div class="no-badge-carousel-caption">
                                <h6>No Badges earned at this time. Keep completing tasks to earn badges.</h6>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }

}

export default BadgeList
