import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../../../components/UI/Card";

import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function RecentPost
 **/

const RecentPost = (props) => {
  const [posts, setPosts] = useState(blogPost.data);
  // const [searchTerm, setSeachTerm] = useState("");

  const filterResult = (catItem) => {
    const result = blogPost.data.filter((curDate) => {
      return curDate.blogCategory === catItem;
    });
    setPosts(result);
  };

  const onSearch = (event) => {
    const search = blogPost.data.filter((val) => {
      if (posts === "") {
        return val;
      } else if (val.blogTitle.toLowerCase().includes(posts.toLowerCase())) {
        return val;
      }
    });
    setPosts(event.target.value);
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
      {/* <Category options={options} handleCategory={handleCategory} /> */}

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
    </>
  );
  {
    /* }); */
  }
};
export default RecentPost;
