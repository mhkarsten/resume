import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface GitProps {


}

export class Git extends React.Component<GitProps> {
    render() {
        return(
            <div>
                Git information goes here
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        navigate: (route: any) => dispatch(push(route))
    };
}

export default connect(null, mapDispatchToProps)(Git)