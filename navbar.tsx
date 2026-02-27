import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: "#222", padding: "15px", color: "white" }}>
      <h2>MyApp</h2>

      <div>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>
          Home
        </Link>

        <Link to="/services" style={{ marginRight: "10px", color: "white" }}>
          Services
        </Link>

        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
