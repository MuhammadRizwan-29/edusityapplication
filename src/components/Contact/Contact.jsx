import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORM_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact__section">
      <div className="left">
        <h3>
          Send us a message <img src={msg} alt="icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail} alt="" /> Contact@edusity.edu.com
          </li>
          <li>
            <img src={phone} alt="" /> +1 123-456-7890
          </li>
          <li>
            <img src={location} alt="" />
            77 Massachusetts Ave, Cambridge
            <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="right">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your email</label>
          <input type="email" name="email" placeholder="Enter email" required />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="dark-button" type="submit">
            Submit Now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
}
