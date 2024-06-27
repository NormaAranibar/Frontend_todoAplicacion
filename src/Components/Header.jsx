import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <p>Todo App</p>
      <nav className={styles.nav}>
        <Link to="/login">login</Link>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
    </div>
  );
};

export default Header;
