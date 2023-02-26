import React from 'react';
import './Contact.css';

function Contact() {

  return (
    <div className='contact' id='contact'>
        <div className='contact_container'>
            <div className='contact_innercontainer'>
                <h2>Contact Me</h2>
                <div className='contact_optioncontainer'>
                    <div className='contact_inneroption'>
                        <article className='contact_option'>
                            <h4>Email</h4>
                            <h5>udititiwari@gmail.com</h5>
                        </article>
                        <article className='contact_optionicon'>
                            <a href='https://www.linkedin.com/in/uditi-tiwari-194592203/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin fa-2x"></i>  </a>
                            <a href='https://github.com/Uditi1' target='_blank' rel='noreferrer'> <i class="fa-brands fa-github fa-2x"></i> </a>
                        </article>
                    </div>

                    <form action='https://formsubmit.co/udititiwari@gmail.com'  method="POST">
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='submit_button'>
                        <div>
                            <span className='sub-bg'></span>
                            <span className='sub-bg2'></span>
                            <span className='sub-base'></span>
                            <span className='sub-text'>Submit</span>
                        </div>
                    </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact