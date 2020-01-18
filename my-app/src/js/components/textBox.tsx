import React from 'react';
import { connect } from 'react-redux';
import '../../css/textbox.css';

export class TextBox extends React.Component {
    constructor(props: any) {
        super(props)
    
    }

    render () {
        return (
            <div className = 'box'>
                <div className = 'title'> This is the title of the textBox</div>
                <div className = 'textBox'>
                    Text Goes Here
                </div>
            </div>
        );
    }
}

export default connect()(TextBox);
