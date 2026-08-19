import React, { useState } from 'react'

const Button = ({text,handler}) => {
      return (
<>
             <button  onClick={handler} className="w-full p-3 mb-4 mt-1.5 rounded-[6px] text-[20px] bg-[#0866ff] text-white cursor-pointer font-semibold hover:bg-[#2670e6]">
                   {text}
                </button>
</>
  )
}

export default Button