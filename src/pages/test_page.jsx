import React from 'react';
import { connect } from "react-redux";

class TestPage extends React.Component{
    render() {
        return(
            <div>
                Test Page
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
export {}