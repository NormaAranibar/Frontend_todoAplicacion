import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <p>Todo App</p>
      <nav>
        <Link to="/login">login</Link>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
    </div>
  );
};

export default Header;
