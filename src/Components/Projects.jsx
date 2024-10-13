import React from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import waytogo from '../Assets/Projects/Screenshot 2023-11-27 152736.png'

function Projects() {
    const [open, setOpen] = useState(false);
  return (
    <div id='projects'>
        <div className="projectshead text-center">
            <h2>What I've Built</h2>
        </div>

        <div className="projectstypehead row">
            <div className="col-md-3"></div>
            <div className="col-md-6 text-center">
                <h2>Full - Stack Projects</h2>
            </div>
            <div className="col-md-3 px-5">
                <div className="filterbox row d-flex justify-content-between rounded-3 bg-white">
                    <div className='filtericon col-3 p-2 d-flex justify-content-center rounded-start-3'>
                        <i class="fa-solid fa-filter fs-3"></i>
                    </div>
                    <div className="filterdropdown col-9 rounded-end-5">
                        <select name="" id="" className='rounded-end-3 text-center'>
                            <option value="allpr">All projects</option>
                            <option value="fullpr">Full-stack projects</option>
                            <option value="frontpr">Front-end projects</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="project">
            <div className='row'>
                <div className="col-2"></div>
                <div className="col-12 col-md-8 ">
                    <div className="projectimg">
                        {/* <img src={waytogo} alt="" width={'100%'} /> */}
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132616104006328320?compact=1" height="399" width={'100%'} frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                    <div className="projectdescr mt-3">
                        <div className="projdescrhead d-flex justify-content-between">
                            <h3>Way-2-Go</h3>
                            <div className="controls d-flex gap-3">
                                <i class="fa-regular fa-eye fs-2"></i>
                                <i class="fa-brands fa-github fs-2"></i>
                            </div>
                        </div>
                        <div className="projdescription">
                            <p className='mb-2 moreinfo' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>More info <i class="fa-solid fa-caret-down"></i></p>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                <p><span>Technologies Used: </span>HTML, CSS, Bootstrap. <br />
                                <span>Overview: </span>A sleek travel website built from scratch using HTML, CSS, and Bootstrap. Excited about the responsive design that ensures a seamless experience across all devices.  <br />
                                <span>Features: <br /></span>✅Responsive design for seamless use on any device <br /></p>
                                </div>
                            </Collapse>
                            
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        
        <div className="project">
            <div className='row'>
                <div className="col-2"></div>
                <div className="col-12 col-md-8 ">
                    <div className="projectimg">
                        {/* <img src={waytogo} alt="" width={'100%'} /> */}
                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132611713849307136?compact=1" height="399" width={'100%'} frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                    <div className="projectdescr mt-3">
                        <div className="projdescrhead d-flex justify-content-between">
                            <h3>WeatherKast</h3>
                            <div className="controls d-flex gap-3">
                                <i class="fa-regular fa-eye fs-2"></i>
                                <i class="fa-brands fa-github fs-2"></i>
                            </div>
                        </div>
                        <div className="projdescription">
                            <p className='mb-2 moreinfo' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>More info <i class="fa-solid fa-caret-down"></i></p>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                <p><span>Technologies Used: </span>HTML, CSS, Bootstrap, Javascript. <br />
                                <span>Overview: </span> This responsive weather-finding website brings a seamless user experience. Check out the video to see how technology and creativity come together to make weather tracking a breeze!  <br />
                                <span>Features: <br /></span>✅Responsive design for seamless use on any device <br />
                                ✅ Global city weather tracking <br />
                                ✅ Engaging cartoon images reflecting real-time weather, transitioning with day and night <br />
                                ✅ User-friendly interface for easy navigation <br />
                                ✅ Attractive design that combines simplicity with style. </p>
                                </div>
                            </Collapse>
                            
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>

    </div>
  )
}

export default Projects