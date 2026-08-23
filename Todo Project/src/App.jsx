import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen max-h-fit flex justify-center items-center bg-[linear-gradient(135deg,#153677,#4e085f)]">
      <div className="h-auto w-[500px] bg-white p-5 rounded-2xl">
        <div className="flex justify-center gap-5 mb-6">
          <h1 className='text-2xl font-bold'>To-Do List</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/4436/4436868.png" alt="" height="32px" width="32px" />
        </div>
        <div className="flex justify-between bg-[#edeef0] rounded-4xl pl-5 mb-6">
          <input type="text" placeholder="Add your todo items...."  className='flex-1 border-none outline-none  p-2.5' />
          <button className='border-none py-4 px-12 bg-[#ff5945] text-white cursor-pointer text-[16px] rounded-[40px]'>Add</button>
        </div>
        <ul>
          <li className='list-none flex justify-between bg-[aliceblue] p-3.5 mb-4 rounded-[6px]'>
            Task 1
            <div className="cursor-pointer flex gap-[10px]">
              <i className="fa-solid fa-pencil text-gray-600"></i>
              <i className="fa-regular fa-trash-can text-red-500"></i>           
               </div>
          </li>
        </ul>
        <div className="flex justify-center items-center"> <button className='text-white bg-[#153677] py-3.5 px-11 text-[16px] cursor-pointer border-none rounded-4xl' >Clear All</button></div>
      </div>
    </div>

  )
}

export default App
