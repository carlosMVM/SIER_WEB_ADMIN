import React, { Component } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import PropTypes from "prop-types";


function ElevationScrollComponent(props) {

    const { children, window } = props;


    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window,
    });


    return React.cloneElement(props.children, {
        elevation: trigger ? 4 : 0,
    });
}


ElevationScrollComponent.propTypes = {
    children: PropTypes.node.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    window: PropTypes.func,
};

export default ElevationScrollComponent;