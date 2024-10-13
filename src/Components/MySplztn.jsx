import React from 'react'
import './myspzltn.css'
import reactcert from '../Assets/Developing Front-End Apps with React.png'
import htmlcss from '../Assets/Introduction to Web Development with HTML, CSS,JavaScript.png'
import nodejs from '../Assets/Developing Back-End Apps with Node.js and Express.png'
import gitessent from '../Assets/Getting Started with Git and GitHub.png'
import assessment from '../Assets/Full Stack Software Developer Assessment.png'

function MySplztn() {
  return (
    <div id='mysplztn'>

        <div className="mysplhead text-center">
            <h2>My Specializations</h2>
        </div>
        <div className="spzlcards row g-4">

            <div className="col-md-4">
                <div className='totcard rounded-5 pt-4 px-4'>
                    <div class="card">
                        <img src={reactcert} alt=''/>
                        <div class="info d-flex justify-content-center align-items-center flex-column mx-auto p-5">
                            {/* <h1 className='fs-2'>Way 2 go</h1> */}
                            {/* <p>HTML,CSS,JavaScript</p> */}
                            <button >Click to view more <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className='splcontent text-center p-3'>
                        <span>Developing Front-End Apps with React</span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className='totcard rounded-5 pt-4 px-4'>
                    <div class="card">
                        <img src={nodejs} alt=''/>
                        <div class="info d-flex justify-content-center align-items-center flex-column mx-auto p-5">
                            {/* <h1 className='fs-2'>Way 2 go</h1> */}
                            {/* <p>HTML,CSS,JavaScript</p> */}
                            <button >Click to view more <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className='splcontent text-center p-3'>
                        <span>Developing Back-End Apps with Node.js</span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className='totcard rounded-5 pt-4 px-4'>
                    <div class="card">
                        <img src={htmlcss} alt=''/>
                        <div class="info d-flex justify-content-center align-items-center flex-column mx-auto p-5">
                            {/* <h1 className='fs-2'>Way 2 go</h1> */}
                            {/* <p>HTML,CSS,JavaScript</p> */}
                            <button >Click to view more <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className='splcontent text-center p-3'>
                        <span>Introduction to Web Development with HTML, CSS,JavaScript</span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className='totcard rounded-5 pt-4 px-4'>
                    <div class="card">
                        <img src={gitessent} alt=''/>
                        <div class="info d-flex justify-content-center align-items-center flex-column mx-auto p-5">
                            {/* <h1 className='fs-2'>Way 2 go</h1> */}
                            {/* <p>HTML,CSS,JavaScript</p> */}
                            <button >Click to view more <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className='splcontent text-center p-3'>
                        <span>Getting Started with Git and GitHub</span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className='totcard rounded-5 pt-4 px-4'>
                    <div class="card">
                        <img src={assessment} alt=''/>
                        <div class="info d-flex justify-content-center align-items-center flex-column mx-auto p-5">
                            {/* <h1 className='fs-2'>Way 2 go</h1> */}
                            {/* <p>HTML,CSS,JavaScript</p> */}
                            <button >Click to view more <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className='splcontent text-center p-3'>
                        <span>Full Stack Software Developer Assessment</span>
                    </div>
                </div>
            </div>            

        </div>
    </div>
  )
}

export default MySplztn