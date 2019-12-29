import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({title, textSections}) => {
    return(
        <div>
            <h1 className="textItemTitle">{title}</h1>
            <div>
                {textSections.map((text,i) => {
                    return <p key={i}>{text}</p>;
                })}
            </div>
        </div>
    );
}

TextItem.propTypes = {
    title: PropTypes.string.isRequired,
    textSections: PropTypes.arrayOf({
        textP: PropTypes.string.isRequired
    }).isRequired
}

export default TextItem;