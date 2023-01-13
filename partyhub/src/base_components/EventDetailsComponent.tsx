import React, {useEffect, useState} from 'react'
import EventProps from "../props/EventProps";
import {Card} from "react-bootstrap";
import {FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt} from "react-icons/fa";
import LocationProps from "../props/LocationProps";
import {getLocationByName} from "../services/apiService";

const EventDetailsComponent: React.FC<EventProps> = (event) => {

    const [location, setLocation] = useState<LocationProps | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getLocationByName(event.location).then(data => {
            console.log(
                "locationEventDetails ---" + data + "\n" +
                data.name
            );

            setLocation(data);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Card className='my-4 py-4 rounded'>
            <Card.Img src={event.image} alt={event.image} height={"400px"}/>

            <Card.Body>
                <Card.Title>
                    <strong>
                        {event ? event.name : "No name found"}
                    </strong>
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
                    <p>
                        <FaMapMarkerAlt/>
                        {location ? location.name : "No location name found"} ,
                        {location ? location.address : "No location address found"}
                    </p>
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
