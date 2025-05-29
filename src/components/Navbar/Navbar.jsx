import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
    console.log(mobileMenu);
  };

  return (
    <header className={`px-10 ${sticky ? "dark-nav" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo-file" />
      </div>
      <div className="menu">
        <ul className={mobileMenu === true ? "" : "hide-mobile-menu"}>
          <li>
            <Link to="hero__section" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about__section"
              smooth={true}
              offset={-150}
              duration={500}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="campus__section"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials__section"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact__section"
              smooth={true}
              offset={-260}
              duration={500}
              className="button"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <img
        src={menu_icon}
        alt="Hamburger Icon"
        className="menu__icon"
        onClick={toggleMenu}
      />
    </header>
  );
}
