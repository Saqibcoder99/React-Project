import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
const steps = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    title: "Step 1: Learn HTML",
    description:
      "Start with the basics of HTML. Learn how to create the structure of web pages using headings, paragraphs, links, images, and more.",
    advice:
      "Practice daily and build small projects to strengthen your understanding.",
  },
  {
    id: 2,
    icon: "fa-solid fa-palette",
    title: "Step 2: Learn CSS",
    description:
      "Learn how to style web pages with CSS. Practice colors, spacing, layouts, flexbox, grid, responsive design, and animations.",
    advice:
      "Don't just watch tutorials. Try to recreate real website designs by yourself.",
  },
  {
    id: 3,
    icon: "fa-solid fa-code-branch",
    title: "Step 3: Learn JavaScript",
    description:
      "Learn JavaScript fundamentals and use it to make your websites interactive with events, functions, arrays, objects, and DOM manipulation.",
    advice:
      "Build small interactive projects and solve problems regularly to improve your logic.",
  },
];

const data=steps[count-1];
  return (
    
    <div className='flex justify-center items-center h-[100vh] bg-[#e5e5e7] text-[#68738A] '>
      <div className="bg-[#FDFDFD] w-[700px]  h-auto flex flex-col  items-center  p-8 rounded-3xl" >
        <h3 className='text-[#17213A] text-4xl font-bold mb-3'>Advice App</h3>
        <p className='font-medium'>Follow these step to master web development</p>
        <div className="flex my-8 items-baseline w-[400px]  text-center">
          <div>
            <div className={`border border-[#D1D5DB] rounded-[50%] p-2 text-[#17213A] font-medium ${count>=1&& "bg-[#4F46E5] text-white border-[#4F46E5]"}`}>
              1
            </div>
            <p className='step text-[#6B7280]'>Step 1</p>
          </div>
          <div className={`flex-1 h-[2px] mx-1 ${count>=2? "bg-[#4F46E5]":"bg-[#D1D5DB]"}`}></div>
          <div>
            <div className={`border border-[#D1D5DB] rounded-[50%] p-2 text-[#17213A] font-medium ${count>=2&& "bg-[#4F46E5] text-white border-[#4F46E5]"}`}>
              2
            </div>
            <p className='step text-[#6B7280]'>Step 2</p>
          </div>
          <div className={`flex-1 h-[2px] mx-1 ${count>=3? "bg-[#4F46E5]":"bg-[#D1D5DB]"}`}></div>
          <div>
            <div className={`border border-[#D1D5DB] rounded-[50%] p-2 text-[#17213A] font-medium ${count>=3&& "bg-[#4F46E5] text-white border-[#4F46E5]"}`}>
              3
            </div>
            <p className='step text-[#6B7280]'>Step 3</p>
          </div>
        </div>
        <div className="bg-[#F7F8FC]  flex items-center flex-col p-8 rounded-2xl border border-[#E5E7F0] gap-4">
          <div className=' bg-[#F1F1FC] h-[50px] w-[50px] flex items-center justify-center rounded-[50%] text-[#4A4AD8] text-2xl'><i className={data.icon}></i></div>
          <div className="text-2xl font-bold text-[#17213A]">{data.title}</div>
          <div className="text-center px-12 font-medium">{data.description}</div>
          <div className="flex bg-[#f1f3f8] p-5 rounded-2xl border border-[#E3E3F5]">
            <div className='text-[#4A4AD8] font-bold'><i class="fa-regular fa-lightbulb"></i></div>
            <div className="px-5">
              <p className='text-[#4A4AD8] font-bold'>Advice</p>
              <p className='font-medium'>{data.advice}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-20 mt-3">
          <button className='px-25 py-3 rounded-[8px] text-[#4A4AD8] border border-[#4A4AD8] transition duration-300 flex gap-3.5 font-medium cursor-pointer
           hover:text-white hover:bg-[#4A4AD8] hover:translate-x-1'  onClick={()=>{count>1?setCount(count-1):setCount(3)}}><span><i class="fa-solid fa-arrow-left-long"></i></span>Previous</button>
          <button className='px-25 py-3 rounded-[8px] text-[#4A4AD8] border border-[#4A4AD8] 
          flex gap-3.5 font-medium cursor-pointer  hover:text-white hover:bg-[#4A4AD8] hover:translate-x-1 transition duration-300'onClick={()=>{count!=3?setCount(count+1):setCount(1)}}>Next <span><i class="fa-solid fa-arrow-right-long"></i></span></button>
        </div>
      </div>
    </div>
  )
}

export default App
