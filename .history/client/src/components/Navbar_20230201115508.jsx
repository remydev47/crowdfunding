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
    <div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
        <div className='lg:flex-1 flex flow-row max-w-[458px] py-2 pl-4 pr-3 h-[52px] bg-[#1c1c24]'>
            <div className='w-[72px] rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer'>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar