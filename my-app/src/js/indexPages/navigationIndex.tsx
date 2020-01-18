import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import "../../css/navigation.css"

interface NavigationProps {

    navigate?: any
}

export class Navigation extends React.Component<NavigationProps> {

    render(){
        const {
            navigate
        } = this.props;
        
        return (
            <div className = 'buttonBox'>
                <button onClick = {() => navigate('/resume')}>Resume</button>
                <button onClick = {() => navigate('/')}>Home</button>
                <button onClick = {() => navigate('/git')}>Git</button>
                <button onClick = {() => navigate('/test')}>Test</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigate: (route: any) => dispatch(push(route)) 
    };
}

export default connect(null, mapDispatchToProps)(Navigation);