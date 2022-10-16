import React from "react";
// import "./App.css";
import Home from "./containers/Home";

import Hero from "./components/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUS from "./containers/ContactUS";
import Post from "./containers/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllBlogs from "./containers/Home/AllBlogs/AllBlogs";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Hero /> */}

        <Route path="/" exact component={Home} />
        <Route path="/all-blogs" component={AllBlogs} />
        {/* <Route path="/post/:slug" component={Post} /> */}
        <Route path="/post/:slug" component={BlogPost} />
        {/* I am trying to learn forking, plz accept */}
      </div>
    </Router>
  );
}

export default App;
