import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={"What We Offer"} sub_heading={"Our Program"} />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title title={"Campus Photos"} sub_heading={"Gallery"} />
        <Campus />
        <Title title={"What Student Say"} sub_heading={"TESTIMONIALS"} />
        <Testimonials />
        <Title title={"Get in Touch"} sub_heading={"CONTACT US"} />
        <Contact />
      </div>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
