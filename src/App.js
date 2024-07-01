import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonial/Testimonials";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Render your header outside of <Routes> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
