import React, {Component} from 'react';
import GoogleMap from '../components/GoogleMap';

import MINSK_CENTER from '../constants/minsk_center';
import API_KEY from '../constants/api_key'

import customPlaces from '../locations/places'

const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span><span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${'$'.repeat(place.price_level)}
      </div>
      <div style="font-size: 14px; color: green;">
        ${place.open_now ? 'Open' : 'Closed'}
      </div>
    </div>`;

const handleApiLoaded = (map, maps, places) => {
    console.log(map, maps, places);
    const markers = [];
    const infoWindows = [];

    places.forEach((place) => {
        markers.push(new maps.Marker({
            position: {
                lat: place.location.lat,
                lng: place.location.lng,
            },
            map,
        }));

        infoWindows.push(new maps.InfoWindow({
            content: getInfoWindowString(place),
        }));
    });

    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
            infoWindows[i].open(map, marker);
        });
    });
};

class MarkerInfoWindowGmapsObj extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: customPlaces,
        };
    }

    render() {
        const {places} = this.state;

        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={MINSK_CENTER}
                bootstrapURLKeys={{key: API_KEY}}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps, places)}
            />
        );
    }
}

export default MarkerInfoWindowGmapsObj;
