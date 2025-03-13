import React, { useContext, useRef, useState } from 'react' 
import './Navbar.css' 
import { Link } from 'react-router-dom' 
import logo from '../Assets/logo.png' 
import cart_icon from '../Assets/cart_icon.png' 
import { ShopContext } from '../../Context/ShopContext' 
import nav_dropdown from '../Assets/nav_dropdown.png' 

 const Navbar = () => { 

 let [menu,setMenu] = useState("tickets"); 
 const {getTotaltickets} = useContext(counter); 

 const menuRef = useRef(); 

 const dropdown_toggle = (e) => { 
   menuRef.current.classList.toggle('nav-menu-visible'); 
   e.target.classList.toggle('open'); 
 } 

 return ( 
   <div className='nav'> 
     <Link to='/' onClick={()=>{setMenu("ticket")}} style={{ textDecoration: 'none' }} className="nav-logo"> 
       <img src={logo} alt="logo" /> 
       <p>counter</p> 
     </Link> 
     <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" /> 
     <ul ref={menuRef} className="nav-menu"> 
       <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none'   
   }}>counter</Link>{menu==="counter"?<hr/>:<></>}</li> 
       <li onClick={()=>{setMenu("sathish")}}><Link to='/sathish' style={{ textDecoration: 'none'    
 }}>sathish</Link>{menu===""?<hr/>:<></>}</li> 
       <li onClick={()=>{setMenu("varun")}}><Link to='/varun' style={{ textDecoration: 'none'    
}}>varun</Link>{menu==="krishna"?<hr/>:<></>}</li> 
       <li onClick={()=>{setMenu("sai")}}><Link to='/sai' style={{ textDecoration: 'none'  
 }}>sai</Link>{menu==="sai"?<hr/>:<></>}</li> 
     </ul> 
16  
     <div className="nav-login"> 
       {localStorage.getItem('auth-token') 
       ?<button onClick={()=>{localStorage.removeItem('auth- token');window.location.replace("/");}}>Logout</button> 
       :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>} 

       <div className="ticketDisplay">{getTotaltickets()}</div> 
     </div> 
   </div> 
 ) 
 } 

 export default Navbar