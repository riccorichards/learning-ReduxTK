import { createSlice } from "@reduxjs/toolkit"



const initialState = {
	todos: [],
	status: null,
	error: null
}

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodos: (state, action) => {
			state.todos.push(action.payload)
		},
		toggleCompleteTodo: (state, action) => {
			const toggle = state.todos.find(item => item.id === action.payload)
			toggle.complete = !toggle.complete
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(el => el.id !== action.payload)
		}
	}
})

export const { addTodos, toggleCompleteTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer