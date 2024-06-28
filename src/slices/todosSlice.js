import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (contenido) => {
    const {id,content}  = contenido;
    const response = await Axios.put(`/api/v1/todos/${id}`,{content});
    return response.data;
  }
);
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
      .addCase(updateTodo.pending, (state, action) => {
        state.status = "loading";
        
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const {id} = action.payload;
        const element = state.todos.find(todo =>todo.id = id);
        const index = state.todos.indexOf(element);
        state.todos[index] = action.payload;
        //state.todos.push("tiene que funcionar");
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    },
});
 
export default todosSlice.reducer;
