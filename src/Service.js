import React from 'react'
import {Card, Button} from "react-bootstrap";
const Service= ({url,title, description}) => {
    return (
        <div className="card w-30 col-10 ms-5 m-5 col-md-5 ms-sm-4">
            <Card>
                <Card.Img className="project-image" variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Service
