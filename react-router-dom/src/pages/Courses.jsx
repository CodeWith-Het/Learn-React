import React from 'react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 1,
    title: "React JS",
    description: "Learn React from basics to advanced",
    coursesimage: "https://i.pinimg.com/736x/84/d4/1f/84d41f2e8078d20a79d9e5d69fa28644.jpg"
  },
  {
    id: 2,
    title: "Node JS",
    description: "Backend development with Node & Express",
    coursesimage: "https://i.pinimg.com/736x/72/c8/7c/72c87cdd477929ed4068fb9ce9c79ad7.jpg"
  },
  {
    id: 3,
    title: "Python",
    description: "Python programming for beginners",
    coursesimage: "https://i.pinimg.com/736x/ab/8b/60/ab8b601717b5edfe59f916c656650d79.jpg"
  }
]

const Courses = () => {

  return (
    <div className="courses-page">
      <h2 className="courses-title">All Courses</h2>

      <div className="courses-container">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            
            <img 
              src={course.coursesimage} 
              alt={course.title} 
              className="course-image"
            />

            <h3>{course.title}</h3>
            <p>{course.description}</p>

            <Link to={`/courses/${course.id}`}>
              <button className="course-btn">
                View Details
              </button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
