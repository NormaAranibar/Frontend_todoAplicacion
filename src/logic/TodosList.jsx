// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTodos } from "../slices/todosSlice";

// const TodosList = ({ id }) => {
//   const [editing, setEditing] = useState(false);
//   const dispatch = useDispatch();

//   const { todos, status } = useSelector((state) => state.todos);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchTodos(id));
//     }
//   }, [status, dispatch]);

//   if (todos.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {todos.map((tarea) => (
//         {!editing?(<div>
//           <span>{tarea.body}</span>
//           <button>editar</button>
//           <button>eliminar</button>
//         </div>):(<input />)}
//       ))}
//     </div>
//   );
// };

// export default TodosList;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos , updateTodo, deleteTodo } from "../slices/todosSlice";

const TodosList = ({ id }) => {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [contenido, setContenido] = useState("");
  const dispatch = useDispatch();
  const { todos, status } = useSelector((state) => state.todos);
 
  useEffect(() => {
    dispatch(fetchTodos(id));
  }, [dispatch, id]);

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setContenido(todo.body)
  };

  const handleDeleteClick = (todoId) => {
    dispatch(deleteTodo(todoId)); // Dispatch delete action
  };

  const handleUpdate = ()=>{
    dispatch(updateTodo())
  }

  // const handleEditChange = (event, todoId) => {
  //   const editedText = event.target.value;
  //   dispatch(updateTodo({ id: todoId, body: editedText })); // Dispatch update action
  // };

  // const handleEditCancel = () => {
  //   setEditingTodoId(null); // Stop editing
  // };

  const handleChange = (event) => {
    setContenido(event.target.value)
  }

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
        <div key={todo.id}>
          {editingTodoId === todo.id ? (
            <>
              <input
                type="text"
               
                value={contenido}
                onChange={(event) => handleChange(event)}
              />
              <button onClick={handleUpdate}>Actualizar</button>
            </>
          ) : (
            <>
              <span>{todo.body}</span>
              <button onClick={() => handleEditClick(todo)}>Editar</button>
              <button onClick={() => handleDeleteClick(todo.id)}>
                Eliminar
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodosList;
