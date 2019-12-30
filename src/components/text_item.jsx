import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({title, textSections}) => {
    return(
        <div className='textItemBody'>
            <h2 className="textItemTitle">{title}</h2>
            <div>
                {
                    textSections.map((text, i) => {
                        return <p key={i}>{text}</p>;
                    })
                }
            </div>
        </div>
    );
}

TextItem.propTypes = {
    title: PropTypes.string,
    textSections: PropTypes.arrayOf(PropTypes.string)
}

export default TextItem;