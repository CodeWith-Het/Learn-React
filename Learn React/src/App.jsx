import React from 'react'
import Card from './components/Card'

const App = () => {

const tenishTrainig = [
  {
    "image":"https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
    "age_group": "5-12 Years",
    "category": "For kids",
    "title1": "Junior",
    "title2":"Programs",
    "description": "For kids aged 5-12. Focus on fundamentals and fun.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/a6/0e/06/a60e06ec8d6d558f4c3fd57d06227425.jpg",
    "age_group": "6-14 Years",
    "category": "For kids",
    "title1": "Explorer",
    "title2":"Club",
    "description": "Explore science, art and sports with creative activities.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/d3/e5/39/d3e539067329b392e64c57c191066c1a.jpg",
    "age_group": "7-13 Years",
    "category": "For kids",
    "title1": "Tech",
    "title2":"Tinkerers",
    "description": "Hands-on coding, robotics and engineering basics for kids.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/cf/9e/52/cf9e525ffdd4e01b2b72ec4e9c03ce4b.jpg",
    "age_group": "5-12 Years",
    "category": "For kids",
    "title1": "Art",
    "title2": "Studio",
    "description": "Creative arts and crafts sessions for young minds.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/b2/27/7e/b2277e971a3178aea99ed3e999e14d33.jpg",
    "age_group": "6-13 Years",
    "category": "For kids",
    "title1": "Sports",
    "title2": "League",
    "description": "Join fun games, learn teamwork and improve fitness.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/41/5b/08/415b087d5aaca334daa4b74ff935d8d8.jpg",
    "age_group": "7-12 Years",
    "category": "For kids",
    "title1": "Musics",
    "title2": "Makers",
    "description": "Learn instruments and enjoy group performances.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/13/0d/6d/130d6d211ab3497c47df5b867b839ca7.jpg",
    "age_group": "5-12 Years",
    "category": "For kids",
    "title1": "Science",
    "title2": "Explorers",
    "description": "Fun experiments and science adventures every week.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/15/ae/d2/15aed2b1d904c637f3653f47c4cf108e.jpg",
    "age_group": "8-12 Years",
    "category": "For kids",
    "title1": "Young",
    "title2": "Writers",
    "description": "Stories, poems and creative writing workshops.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/4e/69/eb/4e69ebda60b0c50d3e44a2dee71c0915.jpg",
    "age_group": "6-14 Years",
    "category": "For kids",
    "title1": "Nature ",
    "title2": " Rangers",
    "description": "Outdoor explorations and nature skills for curious minds.",
    "button": { "text": "Read More", "icon": "arrow" }
  },
  {
    "image":"https://i.pinimg.com/736x/13/db/2f/13db2fcae2d50a67e2d5363fc52742c7.jpg",
    "age_group": "5-12 Years",
    "category": "For kids",
    "title1": "Little",
    "title2": "Leaders",
    "description": "Develop confidence, leadership and social skills.",
    "button": { "text": "Read More", "icon": "arrow" }
  }
]

  return (
    <div className='card-container'>
      {tenishTrainig.map(function(elem, idx){
        return (
          <div key={idx}>
            <Card Images={elem.image} Age={elem.age_group} Catagory={elem.category} Title1={elem.title1} title2={elem.title2} Description={elem.description} Button={elem.button} />
          </div>
        )
      })}
    </div>
  )
}

export default App
