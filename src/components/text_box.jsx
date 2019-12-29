import React from 'react';
import PropTypes from 'prop-types';

import TextItem from './text_item.jsx';

const TextBox = ({textItems, pageTitle}) => {
    return (
        <div className="boxBody">
            <div className="pageTitle">
                <h1>{pageTitle}</h1>
            </div>
            {textItems.map((textBlock, j) => {
                return <TextItem 
                    key = {j}
                    textSections={textBlock.TextParagraphs}
                    title={textBlock.TextItemTitle}
                />;
            })}
        </div>
    );
}

TextBox.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    textItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired, 
            textSections: PropTypes.arrayOf({
                textP: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    ).isRequired
}

export default TextBox;