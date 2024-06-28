import { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";
const TodoItem = ({ todo, editing, onUpdate, onEditClick, onDelete }) => {
  const [contenido, setContenido] = useState("");

  useEffect(() => {
    setContenido(todo.body);
  }, [editing, todo.body]);

  const handleChange = (event) => {
    setContenido(event.target.value);
  };

  const handleUpdate = () => {
    onUpdate(todo.id, contenido);
  };

  return (
    <div key={todo.id} className={styles.contend}>
      {editing ? (
        <div>
          <input type="text" value={contenido} onChange={handleChange} />
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      ) : (
        <div className={styles.todo}>
          <span>{todo.body}</span>
          <div className={styles.buttonContainer}>
            <button onClick={() => onEditClick(todo)}>Editar</button>
            <button onClick={() => onDelete(todo.id)}>Eliminar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
