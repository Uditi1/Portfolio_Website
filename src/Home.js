import React from 'react';
import './Home.css';
import { Link } from 'react-scroll';

function Home() {

  return (
    <div className='home' id='home' >
        <div className='home_container'>
            <div className='home_heading' >
                <h2 className='heading'>Hi! <br /> I'm Uditi, <br /> Web Developer </h2>
                <h3 class="subheading">Front End / Back End</h3>
                <div className='buttons'>
                    <Link  to='contact' spy={true} smooth={true} duration={500} className='primary_button'> 
                        <div>
                            <span className='prim-bg2'></span>
                            <span className='prim-bg'></span>
                            <span className='prim-base'></span>
                            <span className='prim-text'>Contact</span>
                        </div>
                    </Link>
                    <a  className='secondary_button' download href='./assets/pdf/Resume.pdf'>
                        <div>
                            <span className='sec-bg2'></span>
                            <span className='sec-bg'></span>
                            <span className='sec-base'></span>
                            <span className='sec-text'>Resume</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home