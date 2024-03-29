import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />}></Route>
          <Route path="/work" exact element={<OurWork />}></Route>

          <Route path="/work/:id" exact element={<MovieDetail />}></Route>
          <Route path="/contact" exact element={<ContactUs />}></Route>

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
