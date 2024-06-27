import { configureStore } from "@reduxjs/toolkit";

import usersReducer from '../slices/usersSlice';
import todosReducer from "../slices/todosSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer,
  },
});
