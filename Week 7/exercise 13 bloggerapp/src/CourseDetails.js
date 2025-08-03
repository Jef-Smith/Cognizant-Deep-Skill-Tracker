import React from 'react';

function CourseDetails({ courses }) {
  return (
    <>
      {courses.map((course, index) => {
        if (course.name === "Angular") {
          return (
            <div key={index}>
              <h2>{course.name}</h2>
              <p>{course.date}</p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <h2>{course.name}</h2>
              <p>{course.date}</p>
            </div>
          );
        }
      })}
    </>
  );
}

export default CourseDetails;
