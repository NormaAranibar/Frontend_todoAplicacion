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
    <div key={todo.id}>
      {editing ? (
        <div>
          <input type="text" value={contenido} onChange={handleChange} />
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      ) : (
        <div>
          <span>{todo.body}</span>
          <button onClick={() => onEditClick(todo)}>Editar</button>
          <button onClick={() => onDelete(todo.id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
