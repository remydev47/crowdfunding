import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { money } from '../assets'

import { CustomButton, FormField } from '../components';
import { checkIfImage } from '../utils/utils';


const CreateCampaign = () => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleSubmit = () => {}

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaign</h1>
      </div>
      <form 
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
       >
        <div className='flex flex-wrap gap-[40px]'>
          <FormField 
           labelName="Your Name *"
           placeholder="john dee"
           inputType='text'
           value={form.name}
           handleChange={() => {}}
          />
          <FormField 
           labelName="Campaign Title *"
           placeholder="Write a Title"
           inputType='text'
           value={form.title}
           handleChange={() => {}}
          />
        </div>

        <FormField 
           labelName="Story *"
           placeholder="Write Your Story"
           isTextArea
           value={form.description}
           handleChange={() => {}}
        />
      </form>
      <div className='w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-120px] rounded-[10px]'>
        <img src={money} alt="money" 
          className='w-[40px] h-[40px] object-contain'
        />
        <h4 className='font-epilogue font-bold text-white text-[25px] ml-[20px]'>You Will Get 100% of the raised Amount</h4>
      </div>

      <div className='flex flex-wrap gap-[40px]'>
          <FormField 
           labelName="Goal *"
           placeholder="ETH 0.50"
           inputType='text'
           value={form.target}
           handleChange={() => {}}
          />
          <FormField 
           labelName="End date *"
           placeholder="End date"
           inputType='text'
           value={form.deadline}
           handleChange={() => {}}
          />
      </div>

    </div>
  )
}

export default CreateCampaign