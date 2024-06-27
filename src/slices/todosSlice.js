import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

export const agregarTodo = createAsyncThunk(
  "todos/agregarTodo",
  async (contenido) => {
    const response = await Axios.post(`/api/v1/todos`,contenido);
    return response.data;
  }
);
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (idUser) => {
    const response = await Axios.get(`/api/v1/todos/user/${idUser}`);
    return response.data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(agregarTodo.pending, (state, action) => {
        state.status = "loading";
        
      })
      .addCase(agregarTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos.push(action.payload);
        
      })
      .addCase(agregarTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    },
});

export default todosSlice.reducer;
