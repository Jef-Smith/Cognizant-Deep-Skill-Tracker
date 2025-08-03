import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <h4><i>{blog.author}</i></h4>
          <p>{blog.desc}</p>
        </div>
      ))}
    </>
  );
}

export default BlogDetails;
