import React from 'react';
import { connect } from "react-redux";


import '../css/homePage.scss';
import TextBox from '../components/text_box.jsx';
import HomePageData from '../data/homePageData.js';

class HomePage extends React.Component{
    render() {
        const data = HomePageData();
        return(
            <div className='homePageBody'>
                <div className='aboutSection'>
                    <h1 className='sectionTitle'>Section 1</h1>
                    <div className='infoBlock'>
                        {/* <TextBox
                            pageTitle= {data.pageTitle}
                            textBlocks= {data.textBlocks}
                        /> */}
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='skillsSection'>
                    <h1 className='sectionTitle'>Section 2</h1>
                    <div className='infoBlock'>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='educationSection'>
                    <h1 className='sectionTitle'>Section 3</h1>
                    <div className='infoBlock'>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
        textBlocks: state.textBlocks
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);