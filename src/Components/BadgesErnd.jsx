import React from 'react'
import fssdBadge from '../Assets/ibm-full-stack-software-developer-professional-cert.png'
import reactBadge from '../Assets/front-end-development-with-react.png'
import nodeBadge from '../Assets/node-and-express-essentials.png'
import htmlBadge from '../Assets/web-development-with-html-css-javascript-essentials.png'
import gitBadge from '../Assets/git-and-github-essentials.1.png'
import assesBadge from '../Assets/full-stack-software-developer-assessment-v2.png'

function BadgesErnd() {
  return (
    <div id='badgesernd'>
        <div className="badgeshead text-center">
            <h2>Badges Earned</h2>
        </div>
        <div className="fullstckmain row rounded-4 p-5">
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
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="allbadges mt-5">
            <div className="row g-5 ">
                <div className="col-md-3">
                    <div className="badge p-4 rounded-5">
                        <img src={reactBadge} alt="" width={'100%'} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="badge p-4 rounded-5">
                        <img src={nodeBadge} alt="" width={'100%'} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="badge p-4 rounded-5">
                        <img src={htmlBadge} alt="" width={'100%'} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="badge p-4 rounded-5">
                        <img src={gitBadge} alt="" width={'100%'} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="badge p-4 rounded-5">
                        <img src={assesBadge} alt="" width={'100%'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BadgesErnd