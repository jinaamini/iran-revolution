import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Revolution from "./components/Home/Revolution";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Lyrics from "./components/PDFPage/PDFView";
import Gallery from "./components/Gallery/Gallery";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./components/Particle";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>

        <Navbar />.
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Revolution />} />
          <Route path="/petition" element={<Home />} />
          <Route path="/you-can-help-us" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<Revolution />} />
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/art" element={<Gallery />} />
          <Route path="/students-in-chains" element={<Gallery category={"chain"} />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
        <div>
          <img className="bg-repeat" src="assets/15.webp" style={{ position: "absolute", left: 50, bottom: 0 }}>
          </img>
        </div>
        <Particle />

      </div>
    </Router>
  );
}

export default App;
