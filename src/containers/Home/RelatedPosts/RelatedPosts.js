import React, { useState } from "react";
import "./relatedposts.css";
import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function RelatedPosts
 **/

const RelatedPosts = (props) => {
  const [posts, setPosts] = useState(blogPost.data);
  return (
    <>
      <section className="post container">
        {posts
          .map((post) => (
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
          ))
          .reverse()
          .splice(0, 4)}
      </section>
    </>
  );
};
export default RelatedPosts;
