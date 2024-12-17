
import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt=""/>
        
      </div>
      <ul className="nav-menu"></ul>
      <li onClick={()=>{setMenu("shop")}}><link style={{ textDecoration: 'none' }} to='/'>Shop</link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><link style={{ textDecoration: 'none' }}  to='/mens'>Men</link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><link style={{ textDecoration: 'none' }}  to='/womens'>Women<link>{menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><link style={{ textDecoration: 'none' }}  to='/kids'>Kids</link>{menu==="kids"?<hr/>:<></>}</li>
      <div className="nav-login-cart">
        <link to='/login'><button>Login</button></link>
        <link to='/cart'><img src={cart_icon} alt="" /></link>
        <div className="nav-cart-count">0</div>
        </div>
      </div>

  )
}

export default Navbar
