import React from 'react';
import {InfoWindow} from "./InfoWindow";

export const Marker = ({ show, place }) => {
    const markerStyle = {
        cursor: 'pointer',
        zIndex: 10,
    };
    const imageStyle = {
        height: 20,
        width: 20,
        backgroundColor: show ? 'yellow' : 'rgba(255, 255, 255, 0.0)',
        borderRadius: 10,

    };

    return (
        <React.Fragment>
            <div style={markerStyle}>
                <img src={place.icon}  alt={place.name} style={imageStyle} />
            </div>
            {show && <InfoWindow place={place} />}
        </React.Fragment>
    );
};
