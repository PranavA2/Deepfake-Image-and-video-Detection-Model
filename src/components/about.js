import React from "react";
import "./CSS/about.css";
import img1 from "./static/upload.svg";
import pho from './static/MakePassportPhoto1.jpg'
import pho1 from './static/self.jpg'
import con1 from "./static/linkedin.svg";
import con2 from "./static/twitter.svg";
import con3 from "./static/facebook.svg";
import img2 from './static/Mission.jpg'
import img3 from './static/vision.png'
import img4 from './static/achievement.jpg'

function about() {
  return (
    <div>
      <div className="about-1 text-center" id="about-1">
        <h1>About US</h1>
        <p>
        Welcome to our team! We are Pranav Ajagekar and Yash Sansare, a dynamic duo passionate about 
        leveraging our skills in machine learning, frontend development, and backend development to tackle the challenges posed by deepfake technology.
        With a keen eye for detail and a strong foundation in cutting-edge technologies, we specialize in 
        developing robust solutions for detecting and combating deepfake videos and images. Our goal is to ensure the integrity and authenticity of visual media in today's digital landscape.
        Through our collaborative efforts and dedication to staying ahead of the curve, we strive to make meaningful contributions to the field of cybersecurity and media authentication. Join us on this exciting journey as we continue to innovate and safeguard against the risks posed by deepfake content.
        </p>
      </div>
      <div className="container section-white">
        <div className="row">
          <h2>Team Behind Deepfake Project</h2>

          <div className="col team-item">
            <img src={pho} alt="" height={150} className='img-team' />
            <h3>Pranav Ajagekar</h3>
            <div className="team-info">
              <h5>Full Stack Developer,ML Developer</h5>
              <p>
              Pranav Ajagekar, our team leader, excels in front-end and back-end development, alongside a strong grasp of machine learning. 
              Proficient in Python, HTML, CSS, JavaScript, Flask, Django, Bootstrap, and React.js, 
              he combines programming expertise with frameworks to drive innovation in deepfake detection and media authentication solutions.
              </p>
              <ul className="team-icon text-white mx-2">
                <a className="linkedin"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <img src={con1} alt="" />
                </a>
                <a className="facebook text-white mx-2"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <img src={con3} alt="fb" />
                </a>
                <a className="twitter text-start text-white mx-2"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <img src={con2} alt="" />
                </a>
              </ul>
            </div>
          </div>

          <div className="col team-item">
            <img src={pho1} alt="" height={150} className='img-team' />
            <h3>Yash Sansare</h3>
            <div className="team-info">
              <h5>ML Developer</h5>
              <p>
              Yash Sansare, a valuable team member, specializes in machine learning and is proficient in Python, 
              particularly adept with the Flask framework. His expertise in ML algorithms and Python programming contributes significantly to our deepfake detection project, ensuring robust and efficient solutions.
              </p>
              <ul className="team-icon text-white mx-2">
                <a className="linkedin"
                  href="https://www.linkedin.com/"
                  target="_blank"
      
                >
                  <img src={con1} alt="" />
                </a>
                <a className="facebook text-white mx-2"
                  href="https://www.facebook.com/"
                  target="_blank"
              
                >
                  <img src={con3} alt="fb" />
                </a>
                <a className="twitter text-start text-white mx-2"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <img src={con2} alt="" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container section-white">
        <div className="row">
        <h2>Overview</h2>
          <div className="col team-item">
            <img src={img2} alt="" className='img-team'/>
            <div className="team-info text-center">
              <h3>MISSION</h3>
              <hr />
              <p>
              Our mission is to develop advanced deepfake detection solutions that safeguard the integrity of visual media and combat the spread of misinformation. We aim to leverage machine learning, frontend, and backend development expertise to create robust algorithms and tools that enable accurate and efficient identification of manipulated content.
              </p>
            </div>
          </div>
          <div className="col team-item">
          <img src={img3} alt="" className='img-team'/>
            <div className="team-info text-center">
              <h3>VISION</h3>
              <hr />
              <p>
              Our vision is to establish ourselves as leaders in the field of deepfake detection, trusted for our innovative technologies and reliable solutions. We envision a future where digital media authenticity is protected, promoting transparency, trust, and security in online communications and content consumption.
              </p>
            </div>
          </div>
          <div className="col team-item">
          <img src={img4} alt="" className='img-team'/>
            <div className="team-info text-center">
              <h3>ACHIEVEMENTS</h3>
              <hr />
              <p>
              Our achievements include pioneering state-of-the-art deepfake detection algorithms, developing user-friendly tools for 
              media authentication, forging collaborative partnerships, educating on deepfake awareness, and making tangible impacts on 
              reducing misinformation propagation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
