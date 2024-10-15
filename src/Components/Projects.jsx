import React from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import waytogo from '../Assets/Projects/Screenshot 2023-11-27 152736.png'

function Projects() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [option, setOption] = useState("allpr")

    const handleOption = (e)=>{
        setOption(e.target.value)
    }

  return (
    <div id='projects'>
        <div className="projectshead text-center">
            <h2>What I've Built</h2>
        </div>

        <div className="projectstypehead row">
            <div className="col-md-3"></div>

            {(option==="fullpr")&&(<div className="col-md-6 text-center">
                <h2>Full - Stack Projects</h2>
            </div>)}
            {(option==="frontpr")&&(<div className="col-md-6 text-center">
                <h2>Front - End Projects</h2>
            </div>)}
            {(option==="allpr")&&(<div className="col-md-6 text-center">
                <h2>All Projects</h2>
            </div>)}

            <div className="col-md-3 px-5">
                <div className="filterbox  d-flex justify-content-center rounded ">
                    
                    <div className="filterdropdown d-flex  rounded-3 pe-3">
                        <div className='filtericon  p-2 '>
                            <i class="fa-solid fa-filter "></i>
                        </div>
                        <select value={option} onChange={handleOption} className=' text-center bg-transparent'>
                            <option value="allpr">All projects</option>
                            <option value="fullpr">Full-stack projects</option>
                            <option value="frontpr">Front-end projects</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        {(option==='fullpr')&&(<div className='row '>

            <div className='col-12'>
                <div className="project text-center">

                           <h2 className='text-danger'>Sorry! Full-Stack category under development!</h2>
     
                </div>
            </div>
            
        </div>)}

        {(option==='frontpr' || option==='allpr')&&(<div className='row '>

            <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                <div className="project">

                            <div className="projectimg">
                                
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132616104006328320?compact=1" height="399" width={'100%'} frameborder="0" allowFullscreen="" title="Embedded post" scrolling='no'></iframe>
                            </div>
                            <div className="projectdescr mt-2">
                                <div className="projdescrhead d-flex justify-content-between">
                                    <h3>Way-2-Go</h3>
                                    <div className="controls d-flex gap-4">
                                        <a href='https://way-to-go.netlify.app' target='blank'><i class="fa-regular fa-eye fs-2"></i></a>
                                        <a href='https://github.com/deee-ke/Way-2-go_travelWebsite' target='blank'><i class="fa-brands fa-github fs-2"></i></a>
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
            </div>
            
            <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
                <div className="project">

                            <div className="projectimg">
                                
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132611713849307136?compact=1" height={"100%"} width={'100%'} frameborder="0" allowFullscreen="" title="Embedded post" scrolling='no'></iframe>
                            </div>
                            <div className="projectdescr mt-2">
                                <div className="projdescrhead d-flex justify-content-between">
                                    <h3>WeatherKast</h3>
                                    <div className="controls d-flex gap-4">
                                        <a href='https://weatherkast-findweather.netlify.app' target='blank'><i class="fa-regular fa-eye fs-2"></i></a>
                                        <a href='https://github.com/deee-ke/WeatherKast_find-weather' target='blank'><i class="fa-brands fa-github fs-2"></i></a>
                                    </div>
                                </div>
                                <div className="projdescription">
                                    <p className='mb-2 moreinfo' onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open}>More info <i class="fa-solid fa-caret-down"></i></p>
                                    <Collapse in={open2}>
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
            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-4">

            </div>

        </div>)}

    </div>
  )
}

export default Projects