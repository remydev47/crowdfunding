import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo, sun } from '../assets';
import { navlinks } from '../constant';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick })=> {
   <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center
   ${!disabled && 'cursor-pointer'} ${styles}`}>

   </div>
}

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>

        <Link to='/'>
          <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" img={logo} />
        </Link>

    </div>
  )
}

export default Sidebar