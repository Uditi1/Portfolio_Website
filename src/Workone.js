import React from 'react';
import './Workone.css';
import { useNavigate } from 'react-router-dom';

function Workone() {

  const navigate = useNavigate();

  return (
    <div className='workone'>
      <div className='workone_container'>
      <div className='workone_heading'>
          <h2>Ecommerce Website</h2>
      </div>
      <div className='workone_description'>
        <div className='workone_rowone'>
            <h5>Role :</h5>
            <p>Lead Developer</p>
        </div>
        <div className='workone_rowtwo'>
            <h5>Stack:</h5>
            <p>React, javacript, Firebase, Stripe</p>
        </div>
        <div className='workone_button'>
          <a className='workone_btnone' href='https://ecommerce-website-2f168.web.app' target='_blank' rel='noopener noreferrer'  >
              <div>
                  <span className='workone-bg2'></span>
                  <span className='workone-bg'></span>
                  <span className='workone-base'></span>
                  <span className='workone-text'>Live</span>
              </div>
          </a>

          <a  className='workone_btntwo' href='https://github.com/Uditi1/ecommerce-website' target='_blank' rel='noopener noreferrer' >
              <div>
                  <span className='workone2-bg2'></span>
                  <span className='workone2-bg'></span>
                  <span className='workone2-base'></span>
                  <span className='workone2-text'>Github</span>
                </div>
            </a>
        </div>
        <div className='workone_rowthree'>
          <p>I created a ecommerce website using react, javacript with 
            firebase to host the site and stripe for payment. In this you can 
            add remove the product and the cost will add and remove automatically.
            It was a challenging project and in process I learn a lot about 
            stripe ,react and firebase.

          </p>
        </div>
        <div className='workone_images'>
            <img src='./assets/images/ecom1.png' alt='' />
            <img src='./assets/images/ecom2.png' alt='' />
            <img src='./assets/images/ecom3.png' alt='' />
            <img src='./assets/images/ecom4.png' alt='' />
        </div>
        
      </div>
      <div className='workone_buttontwo'>
          <button onClick={e => navigate('/worktwo')} className='workone_btnthree' >
                  <div>
                      <span className='workone3-bg2'></span>
                      <span className='workone3-bg'></span>
                      <span className='workone3-base'></span>
                      <span className='workone3-text'>Next Project</span>
                  </div>
          </button>
      </div>
    </div>
    </div>
  )
}

export default Workone