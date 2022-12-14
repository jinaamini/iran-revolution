import React, { useState, useEffect, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Revolution from "./components/Home/Revolution";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Lyrics from "./components/For/For";
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
import Future from "./components/Future/Future";
import Help from "./components/Help/Help";

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
      <Suspense fallback="loading">
        <Preloader load={load} />

        <div className="App" id={load ? "no-scroll" : "scroll"}>

          <Navbar />.
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Revolution />} />
            <Route path="/fa" element={<Revolution language="fa" />} />
            <Route path="/en" element={<Revolution language="en" />} />

            <Route path="/petition" element={<Home />} />
            <Route path="/how-can-you-help-us" element={<Help />} />
            <Route path="/posts" element={<Projects />} />
            <Route path="/about" element={<Revolution />} />
            <Route path="/for" element={<Lyrics />} />
            <Route path="/art" element={<Gallery />} />
            <Route path="/our-loved-ones" element={<Gallery category={"chain"} />} />
            <Route path="/future" element={<Future />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
          <Particle />

          <div>
            <img className="bg-repeat" src="assets/15.webp" style={{ position: "absolute", left: 20, bottom: -20 }}>
            </img>
          </div>

        </div>
      </Suspense>
    </Router>
  );
}

export default App;
