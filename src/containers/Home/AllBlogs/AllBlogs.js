import React, { useState, useEffect } from "react";
import "./allblogs.css";
import Card from "../../../components/UI/Card";

import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import { MDBBtn } from "mdb-react-ui-kit";
import Footer from "../../../components/Footer";

/**
 * @author
 * @function RecentPost
 **/

const AllBlogs = (props) => {
  const [posts, setPosts] = useState(blogPost.data);

  const filterResult = (catItem) => {
    const result = blogPost.data.filter((curDate) => {
      return curDate.blogCategory === catItem;
    });
    setPosts(result);
  };

  const onSearchChange = (value) => {
    const newData = blogPost.data.filter(
      (bloggs) =>
        bloggs.blogTitle.toLowerCase().includes(value.toLowerCase()) ||
        bloggs.blogText.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(newData);
  };

  return (
    <>
      <div className="new">
        <div className="searchForm">
          <form className="d-flex">
            <input
              type="search"
              className="form-control"
              placeholder="search Blog..."
              // value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <MDBBtn type="submit">Search</MDBBtn>
          </form>
        </div>
        <div className="post-filter container">
          <span
            className="filter-item active-filter"
            onClick={() => setPosts(blogPost.data)}
          >
            Home
          </span>
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

        {/* <Category options={options} handleCategory={handleCategory} /> */}

        <section className="post container">
          {posts
            .map((post) => (
              <div className="post-box">
                <NavLink
                  key={post.id}
                  className="link"
                  to={`/post/${post.slug}`}
                >
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
            ))
            .reverse()}
        </section>
      </div>
      <Footer />
    </>
  );
  {
    /* }); */
  }
};
export default AllBlogs;
