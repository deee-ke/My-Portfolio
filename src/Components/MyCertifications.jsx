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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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