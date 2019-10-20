import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

interface ResumeProps {


}

export class Resume extends React.Component<ResumeProps> {

    render() {
        return(
            <div>
                Resume goes here
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigate: (route: any) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(Resume)