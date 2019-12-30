import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import '../css/navBar.scss';

class NavBar extends React.Component {
    render() {
        const {
            navigate
        } = this.props;
        return (
            <div className='navBody'>
                <div className='navContainer'>
                    <button className='navButton1' onClick = {() => navigate('/')}>Home</button>
                    <button className='navButton2' onClick = {() => navigate('/git')}>Git</button>
                    <button className='navButton3' onClick = {() => navigate('/test')}>Test</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (route) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(NavBar);

