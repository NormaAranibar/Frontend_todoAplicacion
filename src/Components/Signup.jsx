import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Replace with your actual login logic (API call, validation, etc.)
    try {
      const response = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Signup failed");
      } else {
        // Handle successful login (redirect, store user data, etc.)
        console.log("Signup successful!");
        navigate("/todoapp");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <label htmlFor="email">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
