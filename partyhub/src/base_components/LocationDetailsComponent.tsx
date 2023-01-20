import React, {useEffect, useState} from 'react'
import EventProps from "../props/EventProps";
import {Card} from "react-bootstrap";
import {FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt} from "react-icons/fa";
import LocationProps from "../props/LocationProps";
import {getLocationByName} from "../services/apiService";

const LocationDetailsComponent: React.FC<LocationProps> = (location) =>{
    const [loading, setLoading] = useState(true);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <Card className='my-4 py-4 rounded'>

            <Card.Body>
                <Card.Title>
                    <strong>
                        {location ? location.name : "No name found"}
                    </strong>
                </Card.Title>
            </Card.Body>

            <Card.Text>
                <div className='my-3'>
                    {location.address}
                </div>
            </Card.Text>

            <Card.Text>
                <div className='my-3'>
                    {location.description}
                </div>
            </Card.Text>
        </Card>
    )
}



export default LocationDetailsComponent;