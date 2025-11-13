import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <h1 className="header-title">Insurance Portal</h1>

      <nav className="nav">
        <Link to="/" className="nav-link">Policies</Link>

        {user && (
          <Link to="/mypolicies" className="nav-link">My Policies</Link>
        )}

        {!user && (
          <Link to="/login" className="nav-link">Login</Link>
        )}

        {user && (
          <button onClick={logout} className="logout-btn">Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
