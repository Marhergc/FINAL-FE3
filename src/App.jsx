import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
