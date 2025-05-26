import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <header className="px-10">
      <div className="logo">
        <img src={logo} alt="logo-file" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            <button>Contact Us</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
