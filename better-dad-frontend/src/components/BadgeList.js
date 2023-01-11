import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import badge_background from '../img/badge_background.jpg'
import '../css/Badges.css'

const BadgeList = (props) => {

    if (props.badges.length > 0) {
        return (
            <div className="badge-carousel">
                <Carousel>
                    {props.badges.map(badge => {
                        return (
                            <Carousel.Item interval={10000000} key={`badge-${badge.id}`}>

                                <img
                                    className="d-block w-100"
                                    src={badge_background}
                                    alt="First slide"
                                />

                                <Carousel.Caption>
                                    <div className="badge-title">
                                        <div className="badge-title-content">
                                            <h2>Badges Earned</h2>
                                        </div>
                                    </div>
                                    <div className="badge-carousel-caption">
                                        <img className='badge-image' src={badge.attributes.badge.image} alt=''></img>
                                        <br></br><br></br>
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
            <div className="badge-carousel">

                <div className="badge-carousel-badges">
                    <Carousel>
                        <div className="badge-title">
                            <h2>Badges Earned</h2>
                        </div>
                        <Carousel.Item interval={10000000}>
                            <img
                                className="d-block w-100"
                                src={badge_background}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className="no-badge-carousel-caption">
                                    <h6>No Badges earned at this time. Keep completing tasks to earn badges.</h6>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }

}

export default BadgeList
