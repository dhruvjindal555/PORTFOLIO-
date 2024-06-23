import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MoreProject from "./Components/MoreProject";
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className=""   >
      <Navbar />
      <Section />
      <About />
      <Portfolio />
      <MoreProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 
