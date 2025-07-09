import React, { use } from 'react';
import './Navbar.css'; 
import logo from '../../assets/logo.svg'; // Adjust the path as necessary
import { useState } from 'react';
import underline from '../../assets/nav_underline.svg'; // Adjust the path as necessary
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Ensure you have this package installed
import menu_open from '../../assets/menu_open.svg'; // Adjust the path as necessary
import menu_close from '../../assets/menu_close.svg'; // Adjust the path as necessary
import { FaBars } from 'react-icons/fa'; // Ensure you have react-icons installed  
import { FaXmark } from 'react-icons/fa6'; // Ensure you have react-icons installed
import { useRef } from 'react';

const Navbar = () => {
    const [menu,setMenu] = useState('about');

    const menuRef = useRef()
    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right='-350px';
    }
    return (
        <div className="navbar">
            <img  src={logo} alt=""/>
            <FaBars className='nav-mob-open' onClick={openMenu}/>
            <ul ref={menuRef} className="nav-menu">
                {/* <img src={menu_close} alt="" className='nav-mob-close'/> */}
                <FaXmark className='nav-mob-close' onClick={closeMenu}/>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu('home')}>home</p></AnchorLink>{menu==='home' ?  <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"3px", marginBottom:"3px"}} /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>about</p> </AnchorLink>{menu==='about' ?  <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"3px", marginBottom:"3px"}} /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>services</p> </AnchorLink>{menu==='services' ?  <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"3px", marginBottom:"3px"}} /> :<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('portfolio')}>portfolio</p></AnchorLink>{menu==='portfolio' ?  <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"3px", marginBottom:"3px"}} /> :<></>} </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}> contact</p></AnchorLink>{menu==='contact' ?  <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"3px", marginBottom:"3px"}} /> :<></>} </li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>connect me</AnchorLink></div>
        </div>
    );
}

export default Navbar;
