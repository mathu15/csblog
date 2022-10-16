import React from "react";
import "./style.css";
import RecentPost from "./RecentPost";
import Footer from "../../components/Footer";
import MyCarousel from "./mycarousel/MyCarousel";
import SmallBlog from "../Home/smallblog/SmallBlog";

const Home = (props) => {
  return (
    <>
      <section>
        <MyCarousel />
        {/* <RecentPost /> */}
        <SmallBlog />
        <Footer />
      </section>
    </>
  );
};

export default Home;
