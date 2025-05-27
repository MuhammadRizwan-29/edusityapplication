import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={"What We Offer"} sub_heading={"Our Program"} />
        <Programs />
        <About />
        <Title title={"Campus Photos"} sub_heading={"Gallery"} />
        <Campus />
        <Title title={"What Student Say"} sub_heading={"TESTIMONIALS"} />
        <Testimonials />
        <Title title={"Get in Touch"} sub_heading={"CONTACT US"} />
      </div>
    </>
  );
}

export default App;
