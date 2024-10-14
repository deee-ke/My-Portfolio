import React from 'react'
import bcadegree from '../Assets/BCA Degree Certificate.png'
import nactet from '../Assets/NACTET Certification Feb 2024.png'
import ibmcerti from '../Assets/IBM FullStack Software Developer Professional Certificate.png'
import luminar from '../Assets/Luminar Technolab Certification Mar 2024.png'

function MyCertifications() {
  return (
    <div id='mycerti' className='container'>

        <div className="mycertihead text-center">
            <h2>My Certifications</h2>
        </div>

        <div className="certiname text-center mt-4">
            <h3>Bachelor of Computer Applications</h3>
        </div>

        <div className="certi row justify-content-between">
            <div className="certificate col-md-3">
                <div className=" overflow-hidden rounded-3 ">
                  <img src={bcadegree} width={'100%'} alt="" />
                </div>
            </div>
            <div className="certisummary col-md-8  rounded-5">
                <div className="slno d-flex ">
                  <h1 className=' ms-auto '>01</h1>
                </div>
                <div className="summary">
                  <p className='m-0 text-end '>
                  "Graduated with a Bachelor of Computer Application, focusing on key areas such as software development, programming languages, and database management. The curriculum emphasized hands-on learning, enabling the application of theoretical concepts in real-world scenarios. Developed strong analytical and problem-solving skills through diverse projects, preparing for a successful career in the technology sector. Achieved a solid foundation in computer science principles."
                  </p>
                </div>
            </div>
        </div>
        
        <div className="certiname text-center">
            <h3>National Council for Technology and Training</h3>
        </div>

        <div className="certi row justify-content-between">
            
            <div className="certisummary col-md-8  rounded-5">
                <div className="slno2 d-flex ">
                  <h1 className=' me-auto '>02</h1>
                </div>
                <div className="summary">
                  <p className='m-0 text-start '>
                  "Completed a comprehensive certification program focused on MEAN and MERN stack development. Gained hands-on experience in building dynamic web applications, mastering front-end and back-end technologies. Developed a deep understanding of RESTful APIs, database management, and user authentication. Enhanced problem-solving skills and learned best practices for full stack development, preparing for a successful career in web technologies."
                  </p>
                </div>
            </div>
            <div className="certificate col-md-3">
                <div className=" overflow-hidden rounded-3 ">
                  <img src={nactet} width={'100%'} alt="" />
                </div>
            </div>
        </div>

        <div className="certiname text-center">
            <h3>IBM Full Stack Software Developer</h3>
        </div>

        <div className="certi row justify-content-between">
            <div className="certificate col-md-5">
                <div className=" overflow-hidden rounded-3 ">
                  <img src={ibmcerti} width={'100%'} alt="" />
                </div>
            </div>
            <div className="certisummary col-md-6  rounded-5">
                <div className="slno3 d-flex ">
                  <h1 className=' ms-auto '>03</h1>
                </div>
                <div className="summary">
                  <p className='m-0 text-end '>
                  "Completed the IBM Full Stack Software Developer Professional Certificate, focusing on front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and React for building responsive web applications."
                  </p>
                </div>
            </div>
        </div>

        <div className="certiname text-center">
            <h3>Luminar Technolab Kochi</h3>
        </div>

        <div className="certi row justify-content-between">
            
            <div className="certisummary col-md-8  rounded-5">
                <div className="slno4 d-flex ">
                  <h1 className=' me-auto '>04</h1>
                </div>
                <div className="summary">
                  <p className='m-0 text-start '>
                  "Achieved a certificate in MEAN/MERN Full Stack Development from Luminar Technolab, focusing on practical skills in MongoDB, Express.js, Angular, and Node.js. Developed comprehensive web applications, Enhanced problem-solving abilities through hands-on projects, learning industry best practices in software development and deployment. Prepared for a dynamic career in web development with a solid foundation in modern frameworks."
                  </p>
                </div>
            </div>
            <div className="certificate col-md-3">
                <div className=" overflow-hidden rounded-3 ">
                  <img src={luminar} width={'100%'} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default MyCertifications