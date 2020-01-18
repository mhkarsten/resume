import React from 'react';
import {connect} from 'react-redux';
import { push } from 'connected-react-router';
import TextBox from '../components/textBox';

interface HomeProps {

    home?: any
}

export class Home extends React.Component<HomeProps> {
    render() {
        const {
            
        } = this.props
        
        return(
            <div>
                <TextBox />
                <TextBox />
                <TextBox />
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