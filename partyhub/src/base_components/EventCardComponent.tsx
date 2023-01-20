import React, {useEffect, useState} from 'react'
import {Card} from "react-bootstrap";
import EventProps from "../props/EventProps";
import {FaMapMarkerAlt, FaCalendarAlt} from "react-icons/fa";
import LocationProps from "../props/LocationProps";
import {getLocationByName} from "../services/apiService";

const EventCardComponent: React.FC<EventProps> = (event) => {

    const [location, setLocation] = useState<LocationProps | undefined>(undefined);
    // const locationName : String = location ? location?.name : undefined
    const locationName : String = location?.name!
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        getLocationByName(event.location).then(data => {
            console.log(
                "locationEvenCard ---" + data + "\n" +
                data.name
            );

            setLocation(data);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <Card className='my-3 py-3 rounded'>
            <Card.Img src={event.image} alt={event.image} height={"150px"}/>

            <Card.Body>
                <Card.Title>
                    <strong>{event.name}</strong>
                </Card.Title>
            </Card.Body>

            {/*<Card.Text>*/}
            {/*    <div className='my-3'>*/}
            {/*        <p><FaMapMarkerAlt/> {location ? location.name : event.location} </p>*/}
            {/*    </div>*/}
            {/*</Card.Text>*/}
            <Card.Link href={"/location/" + locationName}><i><FaMapMarkerAlt/> {location ? location.name : event.location}</i>
            </Card.Link>


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
