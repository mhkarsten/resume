import React from 'react';
import PropTypes from 'prop-types';

import '../css/nav_button.scss'

const NavButton = ({name}) => {
    return (
        <section id="intro">
            <div id="intro-content" className="center-content">
                <div className="center-content-inner">
                    <div className="content-section content-section-margin">
                        <div className="content-section-grid clearfix">
                            <a className="button nav-link" href='https://www.google.com/'>
                            <div className="bottom"></div>
                            <div className="top">
                                <div className="label">{name}</div>
                                <div className="button-border button-border-left"></div>
                                <div className="button-border button-border-top"></div>
                                <div className="button-border button-border-right"></div>
                                <div className="button-border button-border-bottom"></div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

NavButton.propTypes = {
    name: PropTypes.string.isRequired,
}

export default NavButton;