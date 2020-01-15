import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import '../css/navBar.scss';
import NavButton from './nav_button';

class NavBar extends React.Component {
    render() {
        const {
            navigate
        } = this.props;
        return (
            <div className='navBody'>
                <div className='navContainer'>
                    <NavButton name='Home' className='navButton1' onClick = {() => navigate('/')} />
                    <NavButton name='Git' className='navButton2' onClick = {() => navigate('/git')} />
                    <NavButton name='Test' className='navButton3' onClick = {() => navigate('/test')} />
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

