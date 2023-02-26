import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className='skill' id='skill'>
        <div className='skill_container'>
            <div className='skill_innercontainer'>
                <h3 className='skill_heading'> Technical Skills</h3>
                <div className='skill_maincontainer'>
                    <div className='skill_innermaincontainer'>
                        <div  className='frontend_container'>
                            <div className='frontend'>
                                <h3>Frontend Development</h3>
                                <div className='front_content'>
                                    <article className='front_detail'>
                                        <h4>HTML</h4>
                                    </article>

                                    <article className='front_detail'>
                                        <h4>CSS</h4>
                                    </article>

                                    <article className='front_detail'>
                                        <h4>Javascript</h4>
                                    </article>

                                    <article className='front_detail'>
                                        <h4>React</h4>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div  className='backend'>
                            <h3>Backend Development</h3>
                            <div className='back_content'>
                                <article className='back_detail'>
                                    <h4>Node.js</h4>
                                </article>

                                <article className='back_detail'>
                                    <h4>Mongodb</h4>
                                </article>

                                <article className='back_detail'>
                                    <h4>MySQL</h4>
                                </article>

                                <article className='back_detail'>
                                    <h4>Firebase</h4>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills