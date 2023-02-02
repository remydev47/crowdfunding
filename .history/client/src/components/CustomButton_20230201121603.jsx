import React from 'react'

const CustomButton = ({ styles, btnType, title, handleClick}) => {
  return (
    <button
      type={btnType}
      className={`${styles}`}
      onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton