import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [input,setInput ] = useState("")
  const [todos,setTodos ] = useState([])
  const [editTodo,setEditTodo ] = useState(null)

 let addHandler=()=>{
if(input.trim()==""){
  console.log("kuch nh ha");
  return
}
if(todos){
  let exit=todos.map((item)=>item.title.includes(input))
  if(exit[0]){
  return console.log("this item already exit");
    
  }  
}
if(editTodo){
  let update=todos.map((todo)=>todo.id===editTodo?{...todo,title:input}:todo)
  setTodos(update)
  setEditTodo(null)
  setInput("")
  return
}
const todoSet={
  title:input,
  id:Date.now()
}
setTodos((prev)=>(
  [...prev,todoSet]
)

)

setInput("")
 }
 let editHandler=(edit)=>{
 let itemFind=todos.find((todo)=>todo.id===edit)
 setEditTodo(itemFind.id)
 setInput(itemFind.title)
 }
 let delHandler=(delItem)=>{
delItem.target.parentElement.parentElement.remove()

 }
  return (
    <div className="min-h-screen max-h-auto flex justify-center items-center bg-[linear-gradient(135deg,#153677,#4e085f)] overflow-auto">
      <div className="  w-[500px] bg-white p-5 rounded-2xl  ">
        <div className="flex justify-center gap-5 mb-6 ">
          <h1 className='text-2xl font-bold'>To-Do List</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/4436/4436868.png" alt="" height="32px" width="32px" />
        </div>
        <div className="flex justify-between bg-[#edeef0] rounded-4xl pl-5 mb-6">
          <input type="text" placeholder="Add your todo items...." className='flex-1 border-none outline-none  p-2.5' onChange={(e)=>setInput(e.target.value)} value={input}/>
          <button className='border-none py-4 px-12 bg-[#ff5945] text-white cursor-pointer text-[16px] rounded-[40px]' onClick={addHandler}>Add</button>
        </div>
        <ul className='scrollbar-thin overflow-auto h-[auto] py-2.5 min-h-[auto] max-h-[400px] '>
         { todos.map((todo)=><TodoItem editHandler={editHandler} delHandler={delHandler} todo={todo}/>)}
        </ul>
        <div className="flex justify-center items-center mt-4"> <button className='text-white bg-[#153677] py-3.5 px-11 text-[16px] cursor-pointer border-none rounded-4xl' >Clear All</button></div>
      </div>
    </div>

  )
}

export default App

const TodoItem=({todo,editHandler,delHandler})=>{
  
  return(  

          <li className='list-none flex justify-between bg-[aliceblue] p-3.5 mb-4 rounded-[6px]'>
            {todo.title}
            <div className="cursor-pointer flex gap-[10px]">
              <i className="fa-solid fa-pencil text-gray-600" onClick={()=>editHandler(todo.id)}></i>
              <i className="fa-regular fa-trash-can text-red-500" onClick={(e)=>delHandler(e)}></i>
            </div>
          </li>
        )
}
