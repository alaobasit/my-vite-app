import { Routes, Route } from "react-router-dom";
import Movie from "./component/Movie";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/Navbar";
import Message from "./component/Message";
import FetchUsers from "./component/FetchUsers";
import NotFound from "./component/NotFound";
import Carousel from "./component/Carousel";
import PostList from "./component/PostList";
import PostDetails from "./component/PostDetails";
import CreatePost from "./component/CreatePost";
import MovieCard from "./component/MovieCard";
import VideoCard from "./component/VideoCard";
import UserForm from "./component/forms/UserForm";
import Toggle from "./component/Toggle";
import PasswordValidator from "./component/forms/PasswordValidator";
import Counter from "./component/Counter";
import ScrollSection from "./component/ScrollSection";
import ShowHideText from "./component/ShowHideText";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/post-list" element={<PostList />}></Route>
        <Route path="/posts/:postId" element={<PostDetails />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
      </Routes>

    < Navbar />
    < Message />
    < FetchUsers />
    < Carousel />
    < MovieCard />
    < VideoCard />
    < UserForm />
    < Toggle />
    < PasswordValidator />
    < Counter />
    < ScrollSection />
    < ShowHideText />
    <NotFound />
    
    </>
  );
}

export default App;