// import React from "react";

// const RelatedPost = () => {
//   const [posts, setPosts] = useState(blogPost.data);

//   const fetchLatestBlog = () => {
//     const totalBlog = blogPost.data.slice(-4);
//     setPosts(totalBlog);
//   };
//   useEffect(() => {
//     fetchLatestBlog();
//   }, []);
//   return (
//     <>
//       {posts && posts.length > 0 && (
//         <>
//           {posts.length > 1 && <h1>Related Post</h1>}
//           <MDBRow className="row-col-1 row-cols-md-3 g-4">
//             {posts
//               .filter((item) => item.slug != slug)
//               .map((item, index) => (
//                 <MDBCol>
//                   <MDBCard>
//                     <Link to={`/blog/${item.slug}`}>
//                       <MDBCardImage
//                         src={item.blogImage}
//                         alt={item.blogTitle}
//                         position="top"
//                       />
//                     </Link>
//                     <MDBCardBody>
//                       <MDBCardTitle>{item.blogTitle} </MDBCardTitle>
//                       <MDBCardText>{excerpt(item.blogText)} </MDBCardText>
//                     </MDBCardBody>
//                   </MDBCard>
//                 </MDBCol>
//               ))}
//           </MDBRow>
//         </>
//       )}
//     </>
//   );
// };

// export default RelatedPost;
