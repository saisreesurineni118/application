import React from "react"; 
 import "./CSS/Admin.css"; 
 import Sidebar from "../Components/Sidebar/Sidebar"; 
 import TicketDisplay from "../Components/TicketDisplay/TicketDisplay"; 
 import { Route, Routes } from "react-router-dom"; 
 import ListProduct from "../Components/ListProduct/ListProduct"; 
 
 const Admin = () => { 
 
  return ( 
    <div className="admin"> 
      <Sidebar /> 
      <Routes> 
        <Route path="/addticket" element={<Addticket />} /> 
        <Route path="/listusers" element={<Listusers />} /> 
      </Routes> 
    </div> 
27  
  ); 
 }; 
 
 export default Admin; 