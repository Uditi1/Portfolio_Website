import React, { useEffect, useState} from 'react';
import './Header.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';



function Header() {

  const navigate = useNavigate();

  const location = useLocation();
  

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location,]);

  /*  Burger Menu */
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

 
  return (
    <div className='header'>
        <div className='header_container'>
            <div className='logo'>
             <h3 onClick={e => navigate('/')} >Uditi Tiwari</h3> 
            </div>
            <span className='nav_bar' onClick={showSidebar} >
              <i class="fa-solid fa-bars fa-2x" ></i>
            </span>

            <div className={sidebar ? 'header_menu active' : 'header_menu' } >
                <ul className='header_list' >
                    <li className='header_item'> 
                    <Link to="/#home" onClick={showSidebar} > Home </Link>
                    </li>
                    <li className='header_item'>
                                <Link to='/#about' onClick={showSidebar}  > About </Link>
                    </li>
                    <li className='header_item'>
                                <Link to='/#skill' onClick={showSidebar}> Skills </Link>
                    </li>
                    <li className='header_item'>
                                <Link to='/#work' onClick={showSidebar} > Work </Link>
                    </li>
                    <li className='header_item'>
                                <Link to='/#contact' onClick={showSidebar} > Contact </Link>
                    </li>
                </ul>

            </div>

        </div>

    </div>
  )
}

export default Header