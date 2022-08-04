import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';

// Map Area
const Map = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
        margin: "0 0 0 0"
    };
    const defaultCenter = {
        lat: 22.8136822, lng: 89.5635596
    }
    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw">
                <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}></GoogleMap>
            </LoadScript>
        </>
    )
}

export default Map
