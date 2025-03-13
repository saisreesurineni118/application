import React, { useContext } from "react";  
 import "./TicketDisplay.css"; 
 import star_icon from "../Assets/star_icon.png"; 
 import star_dull_icon from "../Assets/star_dull_icon.png"; 
 import { ShopContext } from "../../Context/ShopContext"; 
 
 const TicketDisplay = (props) => { 
 
  const {product} = props; 
  const {addToCart} = useContext(ShopContext); 
 
  return ( 
    <div className="TicketDisplay"> 
      <div className="TicketDisplay-left"> 
        <div className="TicketDisplay-img-list"> 
          <img src={Ticket.image} alt="img" /> 
          <img src={Ticket.image} alt="img" /> 
          <img src={Ticket.image} alt="img" /> 
          <img src={Ticket.image} alt="img" /> 
        </div> 
        <div className="TicketDisplay-img"> 
20  
          <img className="TicketDisplay-main-img" src={ticket.image} alt="img" /> 
        </div> 
      </div> 
      <
        
        <div className="TicketDisplay-right-description"> 
        A Ecofriendly pooja purpose Ecoidols which are made with soil and natural colours 
           
        </div> 
        
        </div> 
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
        <p className="TicketDisplay-right-category"> : 
purpose</p> 
        <p className="TicketDisplay-right-category"> :</p> 
      </div> 
    </div> 
  ); 
}; 
 
 export default TicketDisplay; 
 