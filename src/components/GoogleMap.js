
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../constants/api_key'
const Wrapper = styled.main`
  min-width: 1200px;
  height: 900px;
`;

const GoogleMap = ({ children, ...props }) => (
    <Wrapper>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: API_KEY,
            }}
            {...props}
        >
            {children}
        </GoogleMapReact>
    </Wrapper>
);

GoogleMap.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;
