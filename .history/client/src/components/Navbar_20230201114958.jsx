import React, { useState } from 'react';
import { logo, menu, search, thirdweb } from '../assets';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { navlinks } from '../constant';

const Navbar = () => {
    const navigate = useNavigate();
   const [isActive, setIsActive] = useState('dashboard');
   const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div>Navbar</div>
  )
}

export default Navbar