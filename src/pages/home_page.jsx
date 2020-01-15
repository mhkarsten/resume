import React from 'react';
import { connect } from "react-redux";

import '../css/homePage.scss';

class HomePage extends React.Component{
    render() {
        return(
            <div className='homePageBody'>
                <div className='aboutSection'>
                    <h1 className='sectionTitle'>About</h1>
                    <div className='infoBlock'>
                        <h3>About Me</h3>
                        <p>Lifelong computer science enthusiast. Born and raised in Michigan United States. Completed secondary education in the Netherlands. 
                            Graduated with an International Baccalaureate Diploma in 2018. 
                            Finished first year of Computer Science and Engineering at the Technical University of Delft, Netherlands. Bilingual: Dutch, English. 
                            Enjoy: travel, outdoors, and water sports.</p>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='skillsSection'>
                    <h1 className='sectionTitle'>Skills</h1>
                    <div className='infoBlock'>
                        <h3>Languages</h3>
                        <p> -   Python
                            -	Java
                            -	Javascript
                            -	CSS & HTML
                            -	HTML
                            -	SQL
                            -	No SQL 
                        </p>
                        <h3>Libraries</h3>
                        <p> -	Node.js
                            -	Junit
                            -	React.js
                            -	Vue.js
                            -	Mockito
                            -	Spring
                        </p>
                        <h3>Technical Skills</h3>
                        <p> -	Computer Networking
                            -	Database Design
                            -	Version-Control (Git)
                            -	Linux and Windows capable
                        </p>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='educationSection'>
                    <h1 className='sectionTitle'>Education / Work Experience</h1>
                    <div className='infoBlock'>
                        <h3>Education</h3>
                        <p>[Kitchen Staff] — [Zon en Zeebad]	[2014] — [2017]
                            I worked at a member of the kitchen staff for a local upscale beach restaurant, this involved doing many odd jobs. It also provided me an early experience working in a team with other to accomplish a common goal.	
                            [Stage Technician] — [Volunteer Work]
                            As an extracurricular activity in high school I worked as a stage technician. This involved managing all technical elements of frequent school performances. This developed my skills as a leader, as I was designated to organize my group to accomplish any desired task.	[2017] — [2018]
                        </p>
                        <h3>Work Experience</h3>
                        <p>
                            [Technical University of Delft] — [Computer Science Bachelor]
                            I completed the first of a three-year Bachelors Degree in Delft, Netherlands for the above listed degree. The subject material was relevant to the major and was not general education.
	                        [2018] — [2019]
 
                            [Rijnlands Lyceum] — [International Baccalaureate Diploma]
                            My high school was at an International school in Oestgeest, Netherlands, this was a collage preparation program providing me with the general education required for American collages	[2014] — [2018]
                        </p>
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