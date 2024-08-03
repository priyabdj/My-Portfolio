import React,{useRef} from 'react'
import '../Navbar.css'

import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className='navbar'>
  <img src={menu_open}onClick={openMenu} alt="" className='nav-mob-open'/>
    <ul className="nav-menu" ref={menuRef}> 
     <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
       
       <li>Home</li>
         <li>About</li>
         <li>Project</li>
         <li>Portfolio</li>
         <li>Contact</li>
        
    </ul>
<div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar