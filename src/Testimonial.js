import React from 'react'
import {Carousel} from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
const Testimonial = ({name, url, description}) => {
    console.log(name, url, description);
    return (
        <Carousel.Item>
            <div className="col-md-6 image-container">
                <Avatar className="messages-avatar"  style={{ height: '30%', width: '30%' }}  alt={name} src={url}>
                </Avatar>
            </div>
            <div className="caption-container ">
                <Carousel.Caption className="caption mx-5">
                <h3>{name}</h3>
                <p className="ms-5">{description}</p>
                </Carousel.Caption>
            </div>
        </Carousel.Item>
    )
}

export default Testimonial
