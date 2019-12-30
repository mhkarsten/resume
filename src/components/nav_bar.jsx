import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';


class NavBar extends React.Component {
    render() {
        const {
            navigate
        } = this.props;
        console.log(this.props)
            return (
                <div>
                    <div>
                        <button onClick = {() => navigate('/')}>Home</button>
                        <button onClick = {() => navigate('/git')}>Git</button>
                        <button onClick = {() => navigate('/test')}>Test</button>
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

