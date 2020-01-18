import React from 'react';
import * as actions from '../actions/mainActions';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface TestProps {


}

export class Test extends React.Component<TestProps> {
    render() {
        return(
            <div>
                Tests Go Here
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigate: (route: any) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(Test)