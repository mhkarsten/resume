import React from 'react';
import PropTypes from 'prop-types';

import '../css/nav_button.scss'

const NavButton = ({name}) => {
    return (
        <div class="button" id="button-6">
            <div id="spin"></div>
            <a href="#">{name}</a>
        </div>
    );
}

NavButton.propTypes = {
    name: PropTypes.string.isRequired,
}

export default NavButton;