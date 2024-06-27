import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../slices/todosSlice";
import InputTodo from "../logic/InputTodo";
import TodosList from "../logic/TodosList";

const TodoApp = () => {
 
  // return <div>TodoApp</div>;
  const { user } = useSelector((state) => state.users);
  console.log(user.id)
  if (Object.keys(user).length === 0) {
    return <div>Loading...!</div>;
  }
  return (
    <div>
      <InputTodo id={user.id}/>
      <TodosList id={user.id}/>
    </div>
  );
};

export default TodoApp;
