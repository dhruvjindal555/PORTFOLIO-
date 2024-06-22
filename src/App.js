import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className=" overflow-hidden " >
      <Navbar />
      <Section />
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App; 
