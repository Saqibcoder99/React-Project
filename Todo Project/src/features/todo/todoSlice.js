import { createSlice } from '@reduxjs/toolkit'

const initialState = { todo: [] }

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,actions)=>{                  
     state.todo.push(actions.payload)
    },
    updateTodo:(state,actions)=>{
      
     const findTodo=state.todo.find((todos)=>todos.id==actions.payload.id)     
     
     if(findTodo){     
       findTodo.title=actions.payload.title
    }
    },
    delTodo:(state,actions)=>{
     state.todo=state.todo.filter((todos)=>todos.id!==actions.payload)
    },
    clearAll:(state)=>{
    state.todo=[]
    }
  }
})

export const { addTodo,updateTodo,delTodo,clearAll} = counterSlice.actions

export default counterSlice.reducer