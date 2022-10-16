import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import RecentPost from "../../containers/Home/RecentPost";
import { Button, Container, Header, Segment, Grid } from "semantic-ui-react";
import ReactPlayer from "react-player";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { TelegramShareButton, TelegramIcon } from "react-share";
import RelatedPosts from "../../containers/Home/RelatedPosts/RelatedPosts";
import PodcastPlayer from "@mrpollard/react-rss-podcast-player";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
    blogText2: "",
    blogText3: "",
    blogText4: "",
    blogText5: "",
    blogText6: "",
    blogText7: "",
    blogText8: "",
    blogText9: "",
    blogText10: "",
    blogText11: "",
    blogText12: "",
    blogText13: "",
    blogText14: "",
    blogText15: "",
    blogText16: "",
    videoLink: "",
    videoLink2: "",
  });
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find((post) => post.slug == slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  if (post.blogImage == "") return null;
  if (post.videoLink == "") return null;
  if (post.videoLink2 == "") return null;
  return (
    <>
      <section className="post-header container">
        <div className="header-content post-container">
          {/* <a href="#" className=""></a> */}
          <img
            src={require("../../blogPostImages/" + post.blogImage)}
            alt="Post Image"
            className="header-img"
          />
        </div>
        <div className="sidebar-flex">
          <div className="blogpost-info">
            <h2 className="header-title">{post.postTitle}</h2>
            <div className="postCats">
              <span className="post-cat">{post.blogCategory}</span>
              <span className="post-date">{post.postedOn} </span>
            </div>
            <div className="post-content post-container">
              <h2 className="sub-heading">{post.blogTitle}</h2>
              <p className="post-text">{post.blogText}</p>
              <p className="post-text">{post.blogText2}</p>
              <p className="post-text">{post.blogText3}</p>
              <p className="post-text">{post.blogText4}</p>
              <p className="post-text ">{post.blogText5}</p>

              <div className="youtube-wrapper">
                <div className="youtube-box">
                  <ReactPlayer
                    url={post.videoLink}
                    className="video"
                    controls
                  />
                </div>
              </div>

              <p className="post-text">{post.blogText6}</p>
              <p className="post-text">{post.blogText7}</p>
              <p className="post-text">{post.blogText8}</p>
              {/* <PodcastPlayer url={post.podcastLink} /> */}
              <p className="post-text">{post.blogText9}</p>
              <p className="post-text">{post.blogText10}</p>
              <p className="post-text">{post.blogText11}</p>
              <p className="post-text">{post.blogText12}</p>
              <p className="post-text">{post.blogText13}</p>
              <p className="post-text">{post.blogText14}</p>
              <p className="post-text">{post.blogText15}</p>
              <p className="post-text">{post.blogText16}</p>
              {/* <div className="post-content post-container">
              <p className="post-text">{post.blogText5}</p>
              <p className="post-text">{post.blogText6}</p>
              <p className="post-text">{post.blogText7}</p>
            </div> */}
              {/* <div className="youtube-wrapper">
                <div className="youtube-box">
                  <ReactPlayer
                    url={post.videoLink2}
                    className="video"
                    controls
                  />
                </div>
              </div> */}
            </div>
          </div>

          <div className="recentside-post">
            {/* <Card
            style={{
              marginBottom: "20px",
              padding: "20px",
              boxSizing: "border-box",
            }}
          > */}
            {/* <div className="cardHeader">
              <div className="social-side">
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                  <i class="bx bxl-twitter"></i>
                  <i class="bx bxl-instagram"></i>
                  <i class="bx bxl-linkedin"></i>
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>
            </div> */}

            {/* </Card> */}
            <RelatedPosts />
          </div>
        </div>
        <div className="icon-bar">
          <>
            <div>
              <FacebookShareButton
                url="https://youtu.be/0xqSujRgVXI"
                src={require("../../blogPostImages/" + post.blogImage)}
              >
                <FacebookIcon
                  logoFillColor="white"
                  round={true}
                  size="30"
                ></FacebookIcon>
              </FacebookShareButton>
            </div>
            <div>
              <LinkedinShareButton
                url={`https://youtu.be/Ui9OkdcvQOE`}
                quote={"subscribe share post"}
                hashtag="#react"
              >
                <LinkedinIcon
                  logoFillColor="white"
                  round={true}
                  size="30"
                ></LinkedinIcon>
              </LinkedinShareButton>
            </div>
            <div>
              <TwitterShareButton url={`https://chainscript.dev/about`}>
                <TwitterIcon
                  logoFillColor="white"
                  round={true}
                  size="30"
                ></TwitterIcon>
              </TwitterShareButton>
            </div>
            <div>
              <WhatsappShareButton url={`https://chainscript.dev/about`}>
                <WhatsappIcon
                  logoFillColor="white"
                  round={true}
                  size="30"
                ></WhatsappIcon>
              </WhatsappShareButton>
            </div>
            <div>
              <TelegramShareButton url={`https://chainscript.dev/about`}>
                <TelegramIcon
                  logoFillColor="white"
                  round={true}
                  size="30"
                ></TelegramIcon>
              </TelegramShareButton>
            </div>
          </>
        </div>
        <section>
          <Footer />
        </section>
      </section>
    </>
  );
};

export default BlogPost;
