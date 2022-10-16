import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function SearchFilter
 **/

const SearchFilter = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);
  const searchText = (event) => {
    setPosts(event.target.value);
  };
  return (
    <>
      <div className="sheader">
        <div className=".snav">
          <div className="search-icon">
            <span className="fas fa-search"></span>
          </div>
          <div class="cancel-icon">
            <span className="fas fa-times"></span>
          </div>

          <form action="">
            <input
              type="search"
              className="search-data"
              placeholder="search here..."
              required
            />
            <button className="fas fa-search"></button>
          </form>
        </div>
      </div>
      <section className="spost scontainer">
        {posts.map((post) => {
          return (
            <div className="spost-box">
              <NavLink key={post.id} className="link" to={`/post/${post.slug}`}>
                <img
                  src={require(`../../../blogPostImages/${post.blogImage}`)}
                  alt="convention"
                  className="spost-img"
                />
              </NavLink>

              <div className="spostCats">
                <span className="spostCat">{post.blogCategory}</span>
                <span className="spostDate">{post.postedOn} </span>
              </div>

              <NavLink className="link" to={`/post/${post.slug}`}>
                <span className="spost-title">{post.blogTitle}</span>
              </NavLink>

              <p className="spostDesc">{post.blogText}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default SearchFilter;
