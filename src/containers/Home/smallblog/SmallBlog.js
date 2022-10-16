import React, { useState, useEffect } from "react";
import blogPost from "../../../data/blog.json";
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

import Badge from "../../Badge";
import LatestBlog from "../../LatestBlog";
import Pagination from "../../Pagination";

const Blogs = () => {
  const [posts, setPosts] = useState(blogPost.data);
  const [blogTotal, setBlogTotal] = useState(null);
  const [pageLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const filterResult = (catItem) => {
    const result = blogPost.data.filter((curDate) => {
      return curDate.blogCategory === catItem;
    });
    setPosts(result);
  };

  // useEffect(() => {
  //   loadBlogsData();
  // }, []);

  // const loadBlogsData = () => {
  //   const blogTotal = blogPost.data;
  //   setBlogTotal(blogTotal.data.length);
  //   const newBlog = blogTotal.slice(0, 5);
  //   setPosts(newBlog.data);
  //   if (blogTotal.data.length < 5) {
  //     setCurrentPage(0);
  //   } else {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  };

  return (
    <>
      <>
        <div className="post-filter container">
          <span
            className="filter-item active-filter"
            onClick={() => setPosts(blogPost.data)}
          >
            All
          </span>

          <span
            className="filter-item active-filter"
            onClick={() => {
              filterResult("Events");
            }}
          >
            Events
          </span>
          <span
            className="filter-item active-filter"
            onClick={() => {
              filterResult("Updates");
            }}
            // handleCategory={handleCategory}
          >
            Updates
          </span>
          <span
            className="filter-item active-filter"
            onClick={() => {
              filterResult("Interviews");
            }}
            // handleCategory={handleCategory}
          >
            Interviews
          </span>
        </div>
      </>
      <section className="post container">
        {posts.map((post) => (
          <div className="post-box">
            <NavLink key={post.id} className="link" to={`/post/${post.slug}`}>
              <img
                src={require(`../../../blogPostImages/${post.blogImage}`)}
                alt="convention"
                className="post-img"
              />
            </NavLink>

            <div className="postCats">
              <span className="postCat">{post.blogCategory}</span>
              <span className="postDate">{post.postedOn} </span>
            </div>

            <NavLink className="link" to={`/post/${post.slug}`}>
              <span className="post-title">{post.blogTitle}</span>
            </NavLink>

            <p className="postDesc">{post.blogText}</p>
          </div>
        ))}
      </section>
      <div className="mt-3">
        {/* <Pagination
          currentPage={currentPage}
          loadBlogsData={loadBlogsData}
          pageLimit={pageLimit}
          posts={posts}
          blogTotal={blogTotal}
        /> */}
      </div>
    </>
  );
};

export default Blogs;
