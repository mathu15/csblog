import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import blogPost from "../data/blog.json";

const LatestBlog = () => {
  const [posts, setPosts] = useState(blogPost.data);

  const fetchLatestBlog = () => {
    const totalBlog = blogPost.data.slice(-4);
    setPosts(totalBlog);
  };
  useEffect(() => {
    fetchLatestBlog();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Link to={`/blog/${post.slug}`}>
            <MDBCard
              style={{ maxWidth: "300px", height: "80px" }}
              className="mt-2"
            >
              <MDBRow className="g-0">
                <MDBCol md="3">
                  <MDBCardImage
                    src={require(`../blogPostImages/${post.blogImage}`)}
                    alt={post.blogTitle}
                    fluid
                    // className="rounded-circle"
                    style={{ height: "80px" }}
                  />
                </MDBCol>
                <MDBCol md="9">
                  <MDBCardBody>
                    <p className="text-start latest-title">{post.blogTitle} </p>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </Link>
        ))}
    </div>
  );
};

export default LatestBlog;
