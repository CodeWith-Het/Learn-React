    import { useNavigate, useParams } from 'react-router-dom'
    import { Link } from 'react-router-dom'

    const CourseDetails = () => {

    const { id } = useParams()
    const navigate= useNavigate()

    return (
        <div className="notebook-wrapper">
        <div className="notebook">
            
            <h1 className="notebook-title">
            📘 Course Notes (ID: {id})
            </h1>

            <section className="note-section">
            <h3>Course Name</h3>
            <p>React JS – From Basics to Advanced</p>
            </section>

            <section className="note-section">
            <h3>Description</h3>
            <p>
                This course helps you understand React fundamentals,
                components, hooks, routing, and real-world projects.
            </p>
            </section>

            <section className="note-section">
            <h3>Topics Covered</h3>
            <ul>
                <li>JSX & Components</li>
                <li>Props & State</li>
                <li>Hooks</li>
                <li>React Router</li>
                <li>API Integration</li>
            </ul>
            </section>

            <section className="note-section">
            <h3>Duration</h3>
            <p>8 Weeks</p>
            </section>

            <section className="note-section">
            <h3>Important Notes</h3>
            <p>
                Practice daily, build mini projects, and focus on
                understanding component-based architecture.
            </p>
            </section>

            <Link to={`/courses/`} >
                <button onClick={()=>{
                        navigate(-1)
                }} className='course-back-btn'>Back Now</button>
            </Link>

        </div>
        </div>
    )
    }

    export default CourseDetails
