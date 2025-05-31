import { Link } from "react-router-dom";
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className="font-bold text-xl">Home</Link>
      <Link to="/posts" className="font-bold text-xl">All Posts</Link>
      <div>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/register" className="mx-2">Register</Link>
      </div>
    </nav>
  );
}
