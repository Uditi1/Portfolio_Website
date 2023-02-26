import React from 'react';
import './Worktwo.css';
import { useNavigate } from 'react-router-dom';

function Worktwo() {

    const navigate = useNavigate();

  return (
    <div className='worktwo'>
      <div className='worktwo_container'>
      <div className='worktwo_heading'>
          <h2>Tetris Game</h2>
      </div>
      <div className='worktwo_description'>
        <div className='worktwo_rowone'>
            <h5>Role:</h5>
            <p>Lead Developer</p>
        </div>
        <div className='worktwo_rowtwo'>
            <h5>Stack:</h5>
            <p>javacript, HTML, CSS</p>
        </div>
        <div className='worktwo_button'>
          <a className='worktwo_btnone' href='https://uditi1.github.io/Tetris-Game/' target='_blank' rel='noopener noreferrer'  >
              <div>
                  <span className='worktwo-bg2'></span>
                  <span className='worktwo-bg'></span>
                  <span className='worktwo-base'></span>
                  <span className='worktwo-text'>Live</span>
              </div>
          </a>

          <a  className='worktwo_btntwo' href='https://github.com/Uditi1/Tetris-Game' target='_blank' rel='noopener noreferrer' >
              <div>
                  <span className='worktwo2-bg2'></span>
                  <span className='worktwo2-bg'></span>
                  <span className='worktwo2-base'></span>
                  <span className='worktwo2-text'>Github</span>
                </div>
            </a>
        </div>

        <div className='worktwo_rowthree'>
            <p>I created this tetris game using javascript, html, css. It has 
                10 rows width and 20 column height. The purpose behind making the tetris
                game was to get better understanding of javacript.<br /> And futher more the tetris game really 
                offer many implementation challenges which help me learn many thing about 
                javacript

            </p>
        </div>

        <div className='worktwo_images'>
            <img src='./assets/images/tetris1.png' alt='' />
            <img src='./assets/images/tetris2.png' alt='' />
            <img src='./assets/images/tetris3.png' alt='' />
            <img src='./assets/images/tetris4.png' alt='' />
        </div>
      </div>
      <div className='worktwo_buttontwo'>
          <button onClick={e => navigate('/workone')} className='worktwo_btnthree' >
                  <div>
                      <span className='worktwo3-bg2'></span>
                      <span className='worktwo3-bg'></span>
                      <span className='worktwo3-base'></span>
                      <span className='worktwo3-text'>Back</span>
                  </div>
          </button>
      </div>
    </div>
    </div>
  )
}

export default Worktwo