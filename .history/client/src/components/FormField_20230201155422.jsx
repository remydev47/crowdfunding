import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='flex-1 w-full flex flex-col '>
        {labelName && (
            <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{labelName}</span>
        )}
        {isTextArea ? (
            <textarea />
        ) : (
            <input 
             required
             value={value}
             onChange={handleChange}
             type={inputType}
             step="0.1"
            />
        )}
    </label>
  )
}

export default FormField