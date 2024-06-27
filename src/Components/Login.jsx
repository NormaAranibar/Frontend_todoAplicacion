import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../slices/usersSlice";
import styles from './Login.module.css'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { error, status } = useSelector((state) => state.todos);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Replace with your actual login logic (API call, validation, etc.)
    try {
      // const response = await fetch("/api/v1/user/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   setErrorMessage(errorData.message || "Login failed");
      // } else {
      //   // Handle successful login (redirect, store user data, etc.)
      //   console.log("Login successful!");
      //   const user = await response.json();
      //   console.log(user);
      //   navigate("/todoapp")
      // })
      dispatch(fetchUser({ email, password }));
      // setErrorMessage("Login failed");
      navigate("/todoapp");
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contenedor}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
