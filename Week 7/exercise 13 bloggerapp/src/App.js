import React from 'react';
import './App.css';
import { books, blogs, courses } from './data';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div className="container">
      <div className="column">
        <h1>Course Details</h1>
        <CourseDetails courses={courses} />
      </div>
      <div className="column">
        <h1>Book Details</h1>
        <BookDetails books={books} />
      </div>

      <div className="column">
        <h1>Blog Details</h1>
        <BlogDetails blogs={blogs} />
      </div>

    </div>
  );
}

export default App;
