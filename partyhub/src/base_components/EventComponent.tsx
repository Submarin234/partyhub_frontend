import React from 'react'
import {Card} from "react-bootstrap";
import EventProps from "../props/EventProps";

const EventComponent: React.FC<EventProps> = (event) => {
    return (
        <Card className='my-3 py-3 rounded'>
            <Card.Img src={event.image} alt={event.image} height={"150px"}/>
            <Card.Body>
                <Card.Title>
                    <strong>{event.name}</strong>
                </Card.Title>
            </Card.Body>

            <Card.Text>
                <div className='my-3'>
                    {event.description}
                </div>
            </Card.Text>
        </Card>
    )
}

export default EventComponent;