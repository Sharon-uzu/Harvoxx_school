import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/logo.png'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };

  return (
    <div>
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className='bars' onClick={handleClick}>
                    {click ? (<RiCloseFill id='close' style={{fontSize:'22px'}}/>) : (<FaBars id='bar' />)}
                </div>

                <ul className={click ? 'active' : 'menu'}>
                    <div className="list1">
                        <NavLink to='/' activeclassName = 'active' onClick={closeMenuBar}>Home</NavLink>
                        <NavLink to='/dsp300' activeclassName = 'active' onClick={closeMenuBar}>DSP-300</NavLink>
                        <NavLink to='/dsp100' activeclassName = 'active' onClick={closeMenuBar}>DSP-100</NavLink>
                        <NavLink to='/a' activeclassName = 'active' onClick={closeMenuBar}>Exclusive Training</NavLink>
                        <NavLink to='/a' activeclassName = 'active' onClick={closeMenuBar}>Contact Us</NavLink>
                    </div>

                    <div className="list2">
                        <Link to='/a' className='btn btn1' onClick={closeMenuBar}>Log in</Link>
                        <Link to='/a' className='btn btn2' onClick={closeMenuBar}>Sign up</Link>
                    </div>
                </ul>
            </nav>
            
        </header>

        <div className={click ? 'cover' : 'cover active'}></div>
    </div>
  )
}

export default Header