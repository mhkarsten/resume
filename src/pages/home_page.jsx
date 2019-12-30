import React from 'react';
import { connect } from "react-redux";
import '../css/homePage.scss';
import TextBox from '../components/text_box.jsx';
import HomePageData from '../data/homePageData.js';

class HomePage extends React.Component{
    render() {
        const data = HomePageData();
        return(
            <div>
                <TextBox
                    pageTitle= {data.pageTitle}
                    textBlocks= {data.textBlocks}
                />
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);