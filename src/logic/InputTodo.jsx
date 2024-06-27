import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { agregarTodo } from "../slices/todosSlice";
import { useDispatch } from "react-redux";

const InputTodo = ({id}) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      //addTodoItem(title);
      dispatch(agregarTodo({content,idUser:id}))
      setContent("");
      setMessage("");
    } else {
      setMessage("Por favor agrega contenido!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={content}
          onChange={handleChange}
          className="input-text"
        />
        {/* <button className="input-submit">Submit</button> */}
        <button className="input-submit">
          <FaPlusCircle
            style={{
              color: "#5e5e5e",
              fontSize: "20px",
              marginTop: "2px",
            }}
          />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
