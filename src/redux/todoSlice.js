import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  messageErrors: "",
  dataTodo: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo(state, action) {
      state.dataTodo = state.dataTodo.filter(
        (item) => item.id != action.payload
      );
    },
    loadTodos(state, action) {
      state.dataTodo = action.payload;
    },
    loading(state, action) {
      state.isLoading = action.payload;
    },
    loadTodosErrors(state, action) {
      state.messageErrors = action.payload;
    },
  },
});

export const { deleteTodo, loadTodos, loading, loadTodosErrors } =
  todoSlice.actions;
