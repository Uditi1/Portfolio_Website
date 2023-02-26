import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about' id='about'>
        <div className='about-container'>
            <div className='left'>
                <h2 className='about_heading'>About Me</h2>
                <p  className='about_desc'>Hi There! <br />
                                 I am Uditi Tiwari, a full stack developer.
                                 I am always looking for opportunites to improve my skills.
                                 I love building websites and when I am not working I like to spend
                                 time reading novels, watching anime.</p>
                                <div className='about_resume'>
                                    <a  className='resume_button' download href="assets/pdf/Resume.pdf">
                                        <div>
                                            <span class="resume-bg"></span>
                                            <span class="resume-bg2"></span>
                                            <span class="resume-base"></span>
                                            <span class="resume-text">Resume</span>
                                        </div>
                                    </a>
                                </div>
            </div>
            <div className='right'>
                <img src='./assets/images/skills.svg' alt='' />
            </div>
        </div>
    </div>
  )
}

export default About