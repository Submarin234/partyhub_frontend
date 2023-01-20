import React, {useEffect, useState} from 'react'
import {Card} from "react-bootstrap";
import {FaMapMarkerAlt, FaCalendarAlt} from "react-icons/fa";
import LocationProps from "../props/LocationProps";
import GoogleMapsLocation from '../utils/GoogleMapsLocation';

const LocationCardComponent: React.FC<LocationProps> = (location) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const script = document.createElement('script');
        script.src = "http://maps.google.com/maps/api/js?sensor=false&v=3&libraries=geometry";
        script.async = true;
        document.body.appendChild(script);
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Card className='my-3 py-3 rounded'>
            <Card.Text>
                <div>
                    {location ?
                        <GoogleMapsLocation 
                            id={location.id}
                            name={location.name}
                            address={location.address}
                            description={location.description}
                            lat={location.lat}
                            lon={location.lon}></GoogleMapsLocation>
                        : "No location to display"
                    }
                </div>
            </Card.Text>

            <Card.Body>
                <Card.Title>

                    <Card.Link href={"/location/" + location.name}><i>{location.name}</i>
                    </Card.Link>
                </Card.Title>
            </Card.Body>



            <Card.Text>
                <div className='my-3'>
                    <p><FaMapMarkerAlt/> {location.address} </p>
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    <p> {location.description} </p>
                </div>
            </Card.Text>

        </Card>
    )
}

export default LocationCardComponent;
