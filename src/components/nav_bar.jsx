import React from 'react';
import { connect } from 'react-redux';

class NavBar extends React.Component {
    render() {
            return (
                <div>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
        );
    }
}

export default connect()(NavBar);