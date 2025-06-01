import { Link } from "react-router-dom";
import styles from './navbar.module.css';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
}

  return (
    <nav className={styles.navbar}>
      <Link to="/" className="font-bold text-xl">Home</Link>
      <Link to="/posts" className="font-bold text-xl">All Posts</Link>
       {user && <Link to="/create-post" className={styles.link}>Create Post</Link>}
      <div>
        {!user && <>
        <Link to="/login" className="mx-2">Login</Link>
        <Link to="/register" className="mx-2">Register</Link>
        </>}
        {user && <button className={styles.button} onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}
