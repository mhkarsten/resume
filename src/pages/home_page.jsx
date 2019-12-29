import React from 'react';
import { connect } from "react-redux";
import '../css/homePage.scss';
import TextBox from '../components/text_box.jsx';
import HomePageData from '../data/homePageData.js';

const data = HomePageData();

class HomePage extends React.Component{
    render() {
        return(
            <div>
                <TextBox
                    pageTitle= {data.pageTitle}

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