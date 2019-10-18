import React from 'react';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';
import TextBox from '../components/textBoxes';
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
                <TextBox height = '10' width = '20' />
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