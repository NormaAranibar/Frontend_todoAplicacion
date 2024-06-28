import TodoItem from "../Components/todoItem";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos , updateTodo, /*deleteTodo */} from "../slices/todosSlice"; // Import all actions

const TodosList = ({ id }) => {
  const [editingTodoId, setEditingTodoId] = useState(null); // Track currently edited todo ID
  const [contenido, setContenido] = useState("");
  const dispatch = useDispatch();
  const { todos, status } = useSelector((state) => state.todos);
  console.log(todos);

  // Fetch todos on initial render
  useEffect(() => {
    dispatch(fetchTodos(id));
  }, [dispatch, id]);

  const handleUpdate = (id,contenido) => {
    dispatch(updateTodo({ content: contenido, id }));
    setEditingTodoId(null);
  };

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id); // Mark todo for editing
    setContenido(todo.body);
  };

  const handleDeleteClick = (todoId) => {
    dispatch(deleteTodo(todoId)); // Dispatch delete action
  };

  const handleChange = (event) => {
    setContenido(event.target.value);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    // Handle error case (optional)
    return <div>Error loading todos!</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editing={editingTodoId === todo.id}
          onUpdate={handleUpdate}
          onEditClick={handleEditClick}
          onDelete={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodosList;
