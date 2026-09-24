import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearAll, delTodo, updateTodo } from './features/todo/todoSlice';

function App() {
  const [input,setInput ] = useState("")
  const [editTodo,setEditTodo ] = useState(null)
  let todos=useSelector((state)=>state.todos.todo)
  
  let dispatch=useDispatch()
 const toastHandler = (message) => {
    return toast(message);
  };
//  let addHandler=()=>{
// if(input.trim()==""){
//   console.log("kuch nh ha");
//   return
// }
// if(todos){
//   let exit=todos.map((item)=>item.title.includes(input))
//   if(exit[0]){
//   return console.log("this item already exit");   
//   }  
// }
// if(editTodo){
//   let update=todos.map((todo)=>todo.id===editTodo?{...todo,title:input}:todo)
//   setTodos(update)
//   setEditTodo(null)
//   setInput("")
//   return
// }
// const todoSet={
//   title:input,
//   id:Date.now()
// }
// setTodos((prev)=>(
//   [...prev,todoSet]
// )

// )

// setInput("")
//  }
//  let editHandler=(edit)=>{
//  let itemFind=todos.find((todo)=>todo.id===edit)
//  setEditTodo(itemFind.id)
//  setInput(itemFind.title)
//  }
//  let delHandler=(delItem)=>{
// delItem.target.parentElement.parentElement.remove()

//  }
//  let clearHandler=()=>{
//   setTodos([])  
//  }




let editHandler=(todo)=>{
  setEditTodo(todo.id)
  setInput(todo.title)
}
let delHandler=(id)=>{
dispatch(delTodo(id))
}
let clearAllHandler=()=>{
 dispatch(clearAll())
}
let updateHandler=()=>{
  
    dispatch(updateTodo(
     { id:editTodo,
       title:input
     }
    ))
    setInput("")
    setEditTodo(null)

}
let addHandler=()=>{
    if (input.trim() == "") {
      return toastHandler("please enter a task!");
    }
    if(editTodo!==null){      
      return updateHandler()
    }
    dispatch(addTodo(
     { title:input,
       id:new Date().getTime()
     }
    ))
    toastHandler("task added!");
    setInput("")
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
          <button className='border-none py-4 px-12 bg-[#ff5945] text-white cursor-pointer text-[16px] rounded-[40px]' onClick={addHandler}>{editTodo?"Update":"Add"}</button>
        </div>
        <ul className='scrollbar-thin overflow-auto h-[auto] py-2.5 min-h-[auto] max-h-[400px] '>
         { todos.map((todo)=><TodoItem todo={todo} key={todo.id} editHandler={editHandler} delHandler={delHandler}/>)}
        </ul>
        <div className="flex justify-center items-center mt-4"> <button className='text-white bg-[#153677] py-3.5 px-11 text-[16px] cursor-pointer border-none rounded-4xl' onClick={clearAllHandler}  >Clear All</button></div>
      </div>
       <ToastContainer />
    </div>
  )
}

export default App

const TodoItem=({todo,editHandler,delHandler})=>{
  
  return(  

          <li className='list-none flex justify-between bg-[aliceblue] p-3.5 mb-4 rounded-[6px]'>
            {todo.title}
            <div className="cursor-pointer flex gap-[10px]">
              <i className="fa-solid fa-pencil text-gray-600" onClick={()=>editHandler(todo)} ></i>
              <i className="fa-regular fa-trash-can text-red-500" onClick={()=>delHandler(todo.id)} ></i>
            </div>
          </li>
        )
}
