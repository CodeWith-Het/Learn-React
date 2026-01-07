import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Lesson from './pages/Lesson'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetails />}>
          <Route path='lessons' element={<Lesson />} />
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
