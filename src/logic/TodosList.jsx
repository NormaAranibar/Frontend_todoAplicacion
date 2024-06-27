import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../slices/todosSlice";

const TodosList = ({ id }) => {
  const dispatch = useDispatch();

  const { todos, status } = useSelector((state) => state.todos);
  console.log(todos);
  console.log(id)
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos("1"));
    }
  }, [status, dispatch]);

  if (todos.length === 0) {
    return <div>Loading...</div>;
  }
  return <div>{JSON.stringify(todos)}</div>;
};

export default TodosList;
