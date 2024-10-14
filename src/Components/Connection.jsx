import React from 'react'

function Connection() {
  return (
    <div id='connection'>
        <div className="connectionhead text-center">
            <h2>Let's establish a Connection</h2>
        </div>

        {/* <div className="quotebox">
            <div className="quotehead">
                <div className="qtdp">
                    <img src={dpcut} alt="" />
                </div>
                <div className="quotenamesec">
                    <div className="quotename">
                        <h3>Dhanish Ahamed</h3>
                    </div>
                    <div className="quotedesignation">
                        <span>MERN Stack Developer</span>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="emailsoc">
            <div className="row justify-content-evenly">
                <div className="col-md-4">
                    <div className="email rounded-4 pt-4 pb-3 ">
                        <div className="emailicon d-flex justify-content-center mb-2">
                            <div className='planeicon p-4'>
                                <i class="fa-solid fa-paper-plane fs-1"></i>
                            </div>
                        </div>
                        <div className="emailhead">
                            <h2>Email Me</h2>
                        </div>
                        <div className="gmail">
                            <a href="mailto:dk.danishahamed">dk.danishahamed@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="social rounded-4 pt-4 pb-3 ">
                        <div className="socicon d-flex justify-content-center mb-2">
                            <div className="servericon p-4">
                                <i class="fa-brands fa-connectdevelop fs-1"></i>
                            </div>
                        </div>
                        <div className="sochead">
                            <h2>Social media</h2>
                        </div>
                        <div className="soclinks d-flex justify-content-evenly">
                            <div className="socicons wtsp">
                                <a href='https://wa.me/918086063016' target='blank'><i class="fa-brands fa-whatsapp fs-4"></i></a>
                            </div>
                            <div className="socicons insta">
                                <a href='https://www.instagram.com/deee.kode' target='blank'><i class="fa-brands fa-instagram fs-4"></i></a>
                            </div>
                            <div className="socicons githb">
                            <a href='https://github.com/deee-ke' target='blank'><i class="fa-brands fa-github fs-4"></i></a>
                            </div>
                            <div className="socicons linkd">
                            <a href='https://www.linkedin.com/in/dhanish-ahamed-4b7553287/' target='blank'><i class="fa-brands fa-linkedin-in fs-4"></i></a>
                            </div>
                            {/* <div className="socicons">
                            <i class="fa-solid fa-phone"></i>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="resume rounded-4 pt-4 pb-3 ">
                        <div className="resumeicon d-flex justify-content-center mb-2">
                            <div className="fileicon p-4">
                                <i class="fa-solid fa-paperclip fs-1"></i>
                            </div>
                        </div>
                        <div className="reshead">
                            <h2>Resume</h2>
                        </div>
                        <div className="resbutton d-flex justify-content-center">
                            <div className="resbtn rounded-1 ">
                                <a download href='https://drive.google.com/file/d/12jX5ONnp6_oF1aOYWfwEk1tHS0mHo4xK/view?usp=sharing' target='blank'><button>Download <i class="fa-solid fa-download"></i></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Connection