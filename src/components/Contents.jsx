import React from 'react';


const courses = [
  {
    title: "Full Stack Development",
    description: "Learn to build full-fledged web applications with modern technologies like React, Node.js, and MongoDB.",
    image: "Full-Stack-Developer.jpg",
    link: "/fullstack"
  },
  {
    title: "Data Science",
    description: "Dive deep into Data Science with Python, Machine Learning, and Data Analysis techniques for solving real-world problems.",
    image: "DataScience.jpg",
    link: "/datascience"
  },
  {
    title: "Cyber Security",
    description: "Master the essentials of cybersecurity to protect systems and data from malicious attacks and cyber threats.",
    image: "Cybersecurity.jpg",
    link: "/cybersecurity"
  },
  {
    title: "Career Development",
    description: "Build a successful career in tech by learning job-ready skills and preparing for interviews with expert guidance.",
    image: "Career.jpg",
    link: "/career"
  }
];

const Contents = ({ category }) => {
  const filteredCourses = courses.filter(course => 
    category === 'all' || course.title.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="course-content">
      {filteredCourses.map(course => (
        <div className="course-card" key={course.title}>
          <img
            src={`/images/${course.image}`} 
            alt={course.name}
          />
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <a href={course.link}>Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default Contents;
