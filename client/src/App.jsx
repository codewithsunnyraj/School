import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About_us from "./pages/About_us";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Admission from "./pages/Admission";
import Blog from "./pages/Blog";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About_us />} path="/about" />
          <Route element={<Event />} path="/event" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Team />} path="/team" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<Admission />} path="/admission" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
