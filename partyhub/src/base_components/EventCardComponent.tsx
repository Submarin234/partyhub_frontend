import React from 'react'
import {Card} from "react-bootstrap";
import EventProps from "../props/EventProps";
import {FaMapMarkerAlt, FaCalendarAlt} from "react-icons/fa";
import locations from "../locations";
import LocationProps from "../props/LocationProps";

function getLocation(location: String) {
    return locations.find((element) => {
        return element.name === location;
    })
}

const EventCardComponent: React.FC<EventProps> = (event) => {

    const location: LocationProps = getLocation(event.location)!

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
                    <p><FaMapMarkerAlt/> {location ? location.name : event.location} </p>
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p><FaCalendarAlt/> {event.date}</p>
                </div>
            </Card.Text>

            <Card.Link href={"/event/" + event.id}><i>See more</i></Card.Link>
        </Card>
    )
}

export default EventCardComponent;
