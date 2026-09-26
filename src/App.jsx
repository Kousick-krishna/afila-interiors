import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import EnquiryPopup from "./components/EnquiryPopup/EnquiryPopup";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <EnquiryPopup />
    </>
  );
}

export default App;