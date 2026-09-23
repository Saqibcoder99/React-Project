import { createSlice } from '@reduxjs/toolkit'

const initialState = { todo: [] }

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,actions)=>{
     state.todo.push(actions.payload)
    }
  },
})

export const { addTodo} = counterSlice.actions

export default counterSlice.reducer