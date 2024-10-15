import React from 'react'
import dpcut from '../Assets/dpcut.jpeg'

function Aboutme() {
  return (
    <div className='aboutme container p-4 mt-5'>
      <div className="abouthead mb-4">
        <div className="dp">
            <img src={dpcut} alt="" />
        </div>
        <div className="abouth2 d-flex align-items-center ">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="aboutcontent">
          <p>“I’m Dhanish Ahamed, a Full Stack Software Developer with a solid foundation in both front-end and back-end development. I hold a BCA degree from Calicut University and have completed a 6-month internship in MERN stack development. I enjoy designing simple and beautiful front ends, as well as building efficient backends for my full stack projects. I'm always eager to take on new challenges and enhancing user experiences. Let's connect and build something amazing together!”</p>
      </div>
    </div>
  )
}

export default Aboutme