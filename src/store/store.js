import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../featureSlice/userSlice/UserSlice";
import todoSlice from "../featureSlice/todoSlice/todoSlice";
import { fetchDatas } from "../featureSlice/getTodos/getTodos";


export const store = configureStore({
	reducer: {
		user: userSlice,
		todo: todoSlice,
		getTodos: fetchDatas
	}
})

