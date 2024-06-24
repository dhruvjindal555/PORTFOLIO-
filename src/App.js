import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MoreProject from "./Components/MoreProject";
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
function App() {
  const aboutRef = useRef (null)
  const contactRef = useRef(null)
  const portfolioRef = useRef(null)

  return (
    <>
      <Navbar portfolioRef={portfolioRef} aboutRef={aboutRef} contactRef={contactRef}/>
      <div className="overflow-x-hidden"   >
        <Section  contactRef={contactRef}/>
      </div>
      <About aboutRef={aboutRef}/>
      <Portfolio  portfolioRef={portfolioRef} />
      <div className="overflow-hidden"   >
        <MoreProject />
        <Contact contactRef={contactRef} />
      </div>
      <Footer />
    </>
  );
}

export default App; 
