import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import EventProps from "../props/EventProps";
import LocationProps from "../props/LocationProps";

const GoogleMapsLocation: React.FC<LocationProps> = (locationProps) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyASBzBvtlh7tGbEZbf7EWV8pE2hCK3Ypio",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map id={locationProps.id} name={locationProps.name} address={locationProps.address} lat={locationProps.lat} lon={locationProps.lon}/>;
}

const Map: React.FC<LocationProps> = (locationProps) => {
    const center = useMemo(() => ({ lat: locationProps.lat, lng: locationProps.lon}), []);
    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
    );
}

export default GoogleMapsLocation;