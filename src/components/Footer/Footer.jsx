import "./Footer.css";

export default function Footer() {
  return (
    <footer className="px-10">
      <p>&copy; {new Date().getFullYear()} Edusity. All rights reserved</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </footer>
  );
}
