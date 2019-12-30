import React from 'react';
import PropTypes from 'prop-types';

import TextItem from './text_item.jsx';

const TextBox = ({textBlocks, pageTitle}) => {
    return (
        <div className="boxBody">
            <div className="pageTitle">
                <h1>{pageTitle}</h1>
            </div>
            {textBlocks.map((textBlock, j) => {
                return <TextItem 
                    key = {j}
                    title={textBlock.TextItemTitle}
                    textSections={textBlock.TextSections}
                />;
            })
            }
        </div>
    );
}
// TODO add back isRequired

TextBox.propTypes = {
    pageTitle: PropTypes.string,
    textBlocks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string, 
            textSections: PropTypes.arrayOf(PropTypes.string)
        })
    )
}

export default TextBox;