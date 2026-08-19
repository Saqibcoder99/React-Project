import React, { useState } from 'react'

const Input = ({type ,placeholder,handler}) => {
  

      return (
<>
            <input type={type}   placeholder={placeholder} onChange={(e)=>handler(e.target.value,type)} className='w-full h-13 mb-3  px-3 rounded-[5px] text-[18px] outline-none border-2 border-[#dddfe2] focus:border-[#0866ff] placeholder:text-[#94949c] '/>
</>
  )
}

export default Input