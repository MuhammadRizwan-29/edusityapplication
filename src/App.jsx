import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
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
      </div>
    </>
  );
}

export default App;
