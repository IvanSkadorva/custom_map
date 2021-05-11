import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MINSK_CENTER from '../constants/minsk_center';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class CustomMap extends Component {
    static defaultProps = {
        center: MINSK_CENTER,
        zoom: 13
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC7Bd23oDPg5JsXQJBKg1DPjLK47oZ2Up4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={53.902287}
                        lng={27.561824}
                        text="oiipeie"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default CustomMap;
