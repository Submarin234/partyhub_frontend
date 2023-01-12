import React from 'react'
import EventProps from "../props/EventProps";
import {Card} from "react-bootstrap";
import {FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt} from "react-icons/fa";
import LocationProps from "../props/LocationProps";
import locations from "../locations";

// TODO: remove this when we use the fake api
function getLocation(id: number) {
    return locations.find((element) => {
        return element._id === id;
    })
}

const EventDetailsComponent: React.FC<EventProps> = (event) => {
    const location: LocationProps = getLocation(event.location)!

    return (
        <Card className='my-4 py-4 rounded'>
            <Card.Img src={event.image} alt={event.image} height={"400px"}/>
            <Card.Body>
                <Card.Title>
                    <strong>{event.name}</strong>
                </Card.Title>
            </Card.Body>

            <Card.Text>
                <div className='my-3'>
                    {event.shortDescription}
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p><FaCalendarAlt/> {event.date}</p>
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p><FaTicketAlt/> Tickets starting from: {event.ticketPrice}</p>
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p><FaMapMarkerAlt/>{location.name} , {location.address}</p>
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    {event.description}
                </div>
            </Card.Text>
        </Card>
    )
}

export default EventDetailsComponent;