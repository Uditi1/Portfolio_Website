import React from 'react';
import './Work.css';
import { useNavigate } from 'react-router-dom';


function Work() {

    const navigate = useNavigate();

  return (
    <div className='work' id='work'>
        <div className='work_container'>
            <div className='work_inner'>
            <h2 className='work_heading'>Work</h2>
            <div className='work_row'>
                <div className='work_rowinner'>
                <div className='work_item'>
                    <div className='work_inneritem'>
                        <div className='work_thumbnail'>
                            <img src='./assets/images/work1.png' alt='' />
                            <div className='mask'></div>
                        </div>
                        <h4>Ecommerce Website</h4>
                        <span className='term'>Ecommerce Website with react, Firebase and Stripe</span>
                        <span onClick={e => navigate('/workone')} className='more_button'>More</span>
                    </div>
                </div>

                <div className='work_item'>
                    <div className='work_inneritem'>
                        <div className='work_thumbnail'>
                            <img src='./assets/images/work2.1.png' alt='' />
                            <div className='mask'></div>
                        </div>
                        <h4 className='tetris'>Tetris Game</h4>
                        <span className='term_2'>A simple fun game with javascript, html, css</span>
                        <span onClick={e => navigate('/worktwo')} className='more_button'> More </span>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Work;