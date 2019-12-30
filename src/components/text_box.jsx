import React from 'react';
import PropTypes from 'prop-types';

import TextItem from './text_item.jsx';

const TextBox = ({textBlocks, pageTitle}) => {
    return (
        <div className="boxBody">
            <div className="pageTitle">
                <h1>{pageTitle}</h1>
            </div>
            <div className='textBody'>
                {
                    textBlocks.map((textBlock, j) => {
                        return <TextItem
                            className={'TextItem'+j} 
                            key={j}
                            title={textBlock.TextItemTitle}
                            textSections={textBlock.TextSections}
                        />;
                    })
                }
            </div>
        </div>
    );
}
// TODO add back isReqsuired

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