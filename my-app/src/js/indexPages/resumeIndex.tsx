import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

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