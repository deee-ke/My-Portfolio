import React from 'react'
import fssdBadge from '../Assets/ibm-full-stack-software-developer-professional-cert.png'
import reactBadge from '../Assets/front-end-development-with-react.png'
import nodeBadge from '../Assets/node-and-express-essentials.png'
import htmlBadge from '../Assets/web-development-with-html-css-javascript-essentials.png'
import gitBadge from '../Assets/git-and-github-essentials.1.png'
import assesBadge from '../Assets/full-stack-software-developer-assessment-v2.png'

function BadgesErnd() {

    // const goto = ()=>{
    //     window.open("https://www.credly.com/badges/6ebc0274-7176-44c2-97bc-94a42a82c73c/public_url",'blank')
    // }

  return (
    <div id='badgesernd'>
        <div className="badgeshead text-center">
            <h2>Badges Earned</h2>
        </div>
        <a className='fullstackmainlink' href='https://www.credly.com/badges/6ebc0274-7176-44c2-97bc-94a42a82c73c/public_url' target='blank'>
            <div className="fullstckmain row rounded-4 p-4 " >
                <div className="col-md-4">
                    <div className="mainbadge rounded-2" >
                        <img src={fssdBadge} alt="" width={'100%'}/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="mainbadgedetails">
                        <div className="fssdhead">
                            <h3>Full Stack Software Developer Professional certificate</h3>
                        </div>
                        <div className="fssdsummary mt-4">
                            <p>
                            Awarded the IBM Full Stack Software Developer Professional Certificate badge via Credly, recognizing comprehensive skills in both front-end and back-end development. Gained expertise in technologies such as React, Node.js, HTML, and CSS. Demonstrated proficiency in building, deploying, and maintaining full stack web applications. The badge validates real-world project experience, ensuring readiness to take on complex software development challenges in professional environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <div className="allbadges mt-5">
            <div className="row g-4 ">
                <div className="col-md-3 col-6">
                    <a href='https://www.credly.com/badges/ce826a92-c920-47c3-af40-2dca238259bb/public_url' target='blank'>
                        <div className="badge p-4 rounded-5">
                            <img src={reactBadge} alt="" width={'100%'} />
                        </div>
                    </a>
                </div>
                <div className="col-md-3 col-6">
                    <a href='https://www.credly.com/badges/99ea739e-67b3-414e-b5cd-5413f055531a/public_url' target='blank'>
                        <div className="badge p-4 rounded-5">
                            <img src={nodeBadge} alt="" width={'100%'} />
                        </div>
                    </a>
                </div>
                <div className="col-md-3 col-6">
                    <a href='https://www.credly.com/badges/15536aa9-ddb5-4c91-8c28-44a5f5520d31/public_url' target='blank'>
                        <div className="badge p-4 rounded-5">
                            <img src={htmlBadge} alt="" width={'100%'} />
                        </div>
                    </a>
                </div>
                <div className="col-md-3 col-6">
                    <a href='https://www.credly.com/badges/ff1eabe2-e740-4e12-8e42-e42a2592360b/public_url' target='blank'>
                        <div className="badge p-4 rounded-5">
                            <img src={gitBadge} alt="" width={'100%'} />
                        </div>
                    </a>
                </div>
                <div className="col-md-3 col-6">
                    <a href='https://www.credly.com/badges/ab03890d-c3d2-4ba1-89cc-39142e207e17/public_url' target='blank'>
                        <div className="badge p-4 rounded-5">
                            <img src={assesBadge} alt="" width={'100%'} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BadgesErnd