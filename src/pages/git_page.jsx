import React from 'react';
import { connect } from "react-redux";

class GitPage extends React.Component{
    render() {
        return(
            <div>
                Git Page
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

export default connect(mapStateToProps, mapDispatchToProps)(GitPage);