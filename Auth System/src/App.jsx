import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
        <div className=" h-1/2 ">
            <div className="w-[500px] h-[100px] mt-6 ml-[-28px]">
                <img src="	https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" className='w-[320px]' alt="facebook"/>
            </div>
            <div className="text-2xl w-[500px] pr-[60px] font-normal font-s">Facebook helps you connect and share with the people in your life.</div>
        </div>
        <div class="box-2">
            <div className="w-[396px] h-[348px] bg-white shadow-amber-50 rounded-[8px] p-4">
            <form onsubmit="submitHandler(event)">

                
            <input type="text"   placeholder="Email address or phone number"  className='w-full h-13 mb-3  px-3 rounded-[5px] text-[18px] outline-none border-2 border-[#dddfe2] focus:border-[#0866ff] placeholder:text-[#94949c]'/>
            <input type="password"  placeholder="Password"   className='w-full h-13 mb-3 px-3 rounded-[5px] text-[18px] outline-none border-2 border-[#dddfe2] focus:border-[#0866ff] placeholder:text-[#94949c]' />
                <button className="w-full p-3 mb-4 mt-1.5 rounded-[6px] text-[20px] bg-[#0866ff] text-white cursor-pointer font-semibold hover:bg-[#2670e6]">
                  Log in
                </button>
            </form>
            <p className='text-center font-medium text-[14px] text-[#0866ff] mb-5 cursor-pointer hover:underline '>
                Forgotten password?
            </p>
            <hr className='text-[#d3d4da]'/>
            <button className="w-1/2 p-3.5 block mx-auto mt-5  rounded-[6px] text-[17px] bg-[#42b72a] text-white cursor-pointer font-semibold hover:bg-[#3da528]"><a href="../signup/new acc.html" >Create new account</a></button>
            </div>
        </div>
</>
  )
}

export default App
