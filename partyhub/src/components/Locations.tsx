import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap";
import {getLocations} from "../services/apiService";
import {useEffect} from "react";
import LocationProps from '../props/LocationProps';
import LocationCardComponent from '../base_components/LocationCardComponent';

const Locations: React.FC = () => {

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getLocations().then(data => {
            setLocations(data);
            console.log(data)
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Row>
                {locations.map((location: LocationProps) => (
                    <Col sm={12} md={6} lg={4}>
                        <LocationCardComponent
                            id={location.id}
                            name={location.name}
                            address={location.address}
                            lat={location.lat}
                            lon={location.lon}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Locations;
