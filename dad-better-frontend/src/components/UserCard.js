import React from "react";
import Card from 'react-bootstrap/Card'
import '../css/UserCard.css'

const UserCard = (props) => {
    return (
        <div className="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="quote-image" variant="top" src="https://c8.alamy.com/comp/2J7983E/dad-pixel-art-vector-illustration-father-day-image-or-clip-art-2J7983E.jpg" />
                <Card.Body>
                    <Card.Text>
                        Username:
                    </Card.Text>
                    <Card.Text>Score:</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard


//images
//https://c8.alamy.com/comp/2J7983E/dad-pixel-art-vector-illustration-father-day-image-or-clip-art-2J7983E.jpg
//https://art.pixilart.com/f92ead2a82e39d7.png
//https://apps.joltteam.com/cdn/brikbuild/fathers-day-pixel-art-pixel-art-fathers-day-dad-family-parent-pixel-8bit-1528081308966.brickImg.jpg
// https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ee16b03cd060bf0.png
// https://as1.ftcdn.net/v2/jpg/02/26/62/04/1000_F_226620443_7RuuwNFmm0WX4AYcaSMfsD5pGUfWA5l7.jpg


