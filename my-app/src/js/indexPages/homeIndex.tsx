import React from 'react';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';

interface homeProps {

    home?: any
}

export class Home extends React.Component<homeProps> {
    render() {
        const {
            home
        } = this.props
        
        return(
            <div>

            </div>
        );
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigate: (route: any) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(Home)