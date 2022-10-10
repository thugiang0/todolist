import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./reducer/todolist";
export const store = configureStore({
  reducer: { todolistReducer },
});

