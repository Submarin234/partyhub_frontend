import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap";
import EventProps from "../props/EventProps";
import EventCardComponent from "../base_components/EventCardComponent";
import {getEvents, getEventsByLocation, getLocations} from "../services/apiService";
import {useEffect} from "react";
import LocationProps from "../props/LocationProps";

const Events: React.FC = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const [locations, setLocations] = useState<LocationProps[]>([]);
    const [selectedLocation, setSelectedLocation] = useState('All');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        getEvents().then(data => {
            setEvents(data);
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        if (selectedLocation === 'All') {
            getEvents().then(data => {
                setEvents(data);
            })
        } else {
            getEventsByLocation(selectedLocation).then(data => {
                setEvents(data);
            })
        }

    }, [selectedLocation])

    useEffect(() => {
        getLocations().then(data => {
            const allLocations: Array<LocationProps> = [{
                id: 100000000,
                name: 'All',
                address: '',
                description: '',
                lat: 0,
                lon: 0
            }];

            data = allLocations.concat(data);
            setLocations(data);
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Row>
                {
                    locations &&

                    <select value={selectedLocation} onChange={handleChange}>
                        {locations.map((location: LocationProps) => (
                            <option key={location.name} value={location.name}>
                                {
                                    location.name
                                }
                            </option>
                        ))}
                    </select>
                }
            </Row>
            <Row>
                {events.map((event: EventProps) => (
                    <Col sm={12} md={6} lg={4}>

                        <EventCardComponent
                            id={event.id}
                            name={event.name}
                            description={event.description}
                            image={event.image}
                            date={event.date}
                            shortDescription={event.shortDescription}
                            ticketPrice={event.ticketPrice}
                            location={event.location}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Events;
