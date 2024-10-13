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
                        <img src={waytogo} alt="" width={'100%'} />
                    </div>
                    <div className="projectdescr mt-3">
                        <div className="projdescrhead d-flex justify-content-between">
                            <h3>Project Name</h3>
                            <div className="controls d-flex gap-3">
                                <i class="fa-regular fa-circle-play fs-2"></i>
                                <i class="fa-brands fa-github fs-2"></i>
                            </div>
                        </div>
                        <div className="projdescription">
                            <p className='mb-2 moreinfo' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>More info <i class="fa-solid fa-caret-down"></i></p>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                <p><span>Technologies Used:</span> (List the main tech stack) <br />
                                <span>Description:</span> A brief overview of the project, explaining its purpose and functionality. Highlight any unique features or challenges you solved. <br />
                                <span>Role:</span> Describe your specific contributions (e.g., full stack development, front-end design, back-end logic).</p>
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
                        <img src={waytogo} alt="" width={'100%'} />
                    </div>
                    <div className="projectdescr mt-3">
                        <div className="projdescrhead d-flex justify-content-between">
                            <h3>Project Name</h3>
                            <div className="controls d-flex gap-3">
                                <i class="fa-regular fa-circle-play fs-2"></i>
                                <i class="fa-brands fa-github fs-2"></i>
                            </div>
                        </div>
                        <div className="projdescription">
                            <p className='mb-2 moreinfo' onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>More info <i class="fa-solid fa-caret-down"></i></p>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                <p><span>Technologies Used:</span> (List the main tech stack) <br />
                                <span>Description:</span> A brief overview of the project, explaining its purpose and functionality. Highlight any unique features or challenges you solved. <br />
                                <span>Role:</span> Describe your specific contributions (e.g., full stack development, front-end design, back-end logic).</p>
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