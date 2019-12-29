import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ({title, textBody}) => {
    return(
        <div>
            <h1 className="textItemTitle">{title}</h1>
            <div>
                {textBody.map((textP,i) => {
                    return <p key={i}>{textP}</p>;
                })}
            </div>
        </div>
    );
}

TextItem.propTypes = {
    title: PropTypes.string.isRequired,
    textSections: PropTypes.arrayOf({
        textP: PropTypes.string.isRequired
        }
    ).isRequired
}

export default TextItem;