import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <header className={`px-10 ${sticky ? "dark-nav" : ""}`}>
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
