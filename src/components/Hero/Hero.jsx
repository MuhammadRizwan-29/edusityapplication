import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

export default function Hero() {
  return (
    <section className="hero__section">
      <div className="text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button>
          Explore more <img src={dark_arrow} />
        </button>
      </div>
    </section>
  );
}
