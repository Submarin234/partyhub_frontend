import React, {useEffect, useState} from 'react'
import EventProps from "../props/EventProps";
import {Card} from "react-bootstrap";
import {FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt} from "react-icons/fa";
import LocationProps from "../props/LocationProps";
import {getLocationByName} from "../services/apiService";
import GoogleMapsLocation from "../utils/GoogleMapsLocation";
import Countdown from "react-countdown";

const EventDetailsComponent: React.FC<EventProps> = (event) => {

    const [location, setLocation] = useState<LocationProps | undefined>(undefined);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const script = document.createElement('script');
        script.src = "http://maps.google.com/maps/api/js?sensor=false&v=3&libraries=geometry";
        script.async = true;
        document.body.appendChild(script);
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

    const Completionist = () => <span>The event is happening now!</span>;

    return (

        <Card className='my-4 py-4 rounded'>
            <div className="imageCard">
            <Card.Img className="resizeImage" src={event.image} alt={event.image} height={"400px"}/>
            </div>
            <br/>
            <Card.Text>
                <Card.Title>
                    <strong>
                        {event ? event.name : "No name found"}
                    </strong>
                </Card.Title>

            </Card.Text>
            <Card.Text>
                <div className='my-3'>
                    {event.shortDescription}
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p><FaCalendarAlt/> {event.date}</p>
                    Time left:
                    <Countdown date={Date.parse(event.date) + 5000} className='countdown'>
                        <Completionist />
                    </Countdown>
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
            <Card.Text>
                <div>
                    {location ?
                    <GoogleMapsLocation id={location.id} name={location.name} address={location.address} lat={location.lat} lon={location.lon} description={location.description}></GoogleMapsLocation>
                        : "No location to display"
                    }
                </div>
            </Card.Text>
        </Card>

    )
}

export default EventDetailsComponent;
