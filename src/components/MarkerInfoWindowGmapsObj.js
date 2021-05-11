import React, {Component} from 'react';
import GoogleMap from '../components/GoogleMap';

import MINSK_CENTER from '../constants/minsk_center';
import API_KEY from '../constants/api_key'

import customPlaces from '../locations/places'
import {Marker} from "./Marker";


class MarkerInfoWindowGmapsObj extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: customPlaces,
        };
    }

    onChildClickCallback = (key) => {
        const index =  this.state.places.findIndex((e) => e.id.toString() === key);
        this.state.places[index].show = ! this.state.places[index].show;
        this.setState({ places:  this.state.places });
    };

    render() {
        const {places} = this.state;

        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={MINSK_CENTER}
                bootstrapURLKeys={{key: API_KEY}}
                yesIWantToUseGoogleMapApiInternals
                onChildClick={this.onChildClickCallback}
            >
                {places.map((place) => (
                    <Marker
                        key={place.id}
                        lat={place.location.lat}
                        lng={place.location.lng}
                        show={place.show}
                        place={place}
                    />
                ))}
            </GoogleMap>
        );
    }
}

export default MarkerInfoWindowGmapsObj;
