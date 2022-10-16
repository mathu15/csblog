import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/Sidebar";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

/**
 * @author
 * @function Post
 **/

const Post = (props) => {
  console.log(props);

  return (
    <>
      <section className="container">
        <BlogPost {...props} />
      </section>
    </>
  );
};

export default Post;
