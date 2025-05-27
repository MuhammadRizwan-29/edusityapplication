import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

export default function Campus() {
  return (
    <section className="campus__section">
      <div className="gallery">
        <img src={gallery_1} alt="Campus Gallery" />
        <img src={gallery_2} alt="Campus Gallery" />
        <img src={gallery_3} alt="Campus Gallery" />
        <img src={gallery_4} alt="Campus Gallery" />
      </div>
      <button className="dark-button">
        See more here <img src={white_arrow} />
      </button>
    </section>
  );
}
