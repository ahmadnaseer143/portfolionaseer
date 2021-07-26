import React from 'react'
import {Card, Button} from "react-bootstrap";
const Projects= ({url,title}) => {
    return (
        <div className="card col-10 ms-5 my-5 col-md-5 ms-sm-4">
            <Card>
                <Card.Img className="project-image" variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects
