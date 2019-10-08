import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface resumeProps {


}

export class Resume extends React.Component<resumeProps> {


}

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigate: (route: any) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(Resume)