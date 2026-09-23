import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counter/counterslics'

function App() {
  const count = useSelector((state) =>state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
    <h1 class="text-2xl font-bold text-gray-800 mb-6">
      Counter
    </h1>

    <div class="text-5xl font-bold text-blue-600 mb-8">
      {count}
    </div>

    <div class="flex justify-center gap-3">

      <button
        class="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer" onClick={()=>dispatch(decrement())}>
        -
      </button>

      <button
        class="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer" onClick={()=>dispatch(reset())}>
       Reset
      </button>

      <button
        class="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer" onClick={()=>dispatch(increment())} >
        +
      </button>

    </div>
    </>
  )
}

export default App
