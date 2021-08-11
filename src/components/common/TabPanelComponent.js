import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabPanel extends Component {

    render() {
        const { children, value, index } = this.props;
        return (
            <div hidden={value !== index} id={`full-width-tabpanel-${index}`} role="tabpanel"
                aria-labelledby={`full-width-tab-${index}`}>
                {children}
            </div>
        )
    }
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;