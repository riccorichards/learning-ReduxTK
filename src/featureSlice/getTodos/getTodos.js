import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTodos = createAsyncThunk("getTodos/fetchTodos", async () => {
	try {
		const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
		return res.data
	} catch (e) {
		console.log(e)
	}

})

const initialState = {
	getTodos: [],
	status: null,
	error: null
}

const getTodosSlice = createSlice({
	name: "getTodos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = "loaded";
				state.getTodos = action.payload;
			})
			.addCase(fetchTodos.rejected, (state) => {
				state.status = "failed";
				state.error = null;
			});
	},
})

export const fetchDatas = getTodosSlice.reducer;