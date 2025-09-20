import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousel";
import Toggle from "./component/Toggle";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Movie from "./component/Movie";
import NotFound from "./component/NotFound";
import ShowHideText from './component/ShowHideText';
import MovieCard from './component/MovieCard';
import Message from './component/Message';
import PasswordValidator from './component/PasswordValidator';
import Text from './component/Text';
function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Toggle />
      {/* Movie Collection Section */}
      <div className="container my-5">
        <h1 className="text-center mb-4">🎬 Movie Collection</h1>
        <ShowHideText />
        <div className="row g-4">
          <MovieCard />
        </div>
      </div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;