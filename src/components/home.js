import React from "react";
import { Route, Link } from 'react-router-dom';
import img1 from './static/df.png';
import img2 from './static/istockphoto-1482445987-612x612.jpg'
import img3 from './static/istockphoto-1428262683-612x612.jpg'
import icon1 from './static/upload.svg'
import icon2 from './static/search.svg'
import icon3 from './static/check.svg'
import con1 from './static/linkedin.svg'
import con2 from './static/twitter.svg'
import con3 from './static/facebook.svg'
import './CSS/home.css'

function home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="jumbotron">
          <h2 className="display-4">Deepfake Detector,Your tool against AI misinformation</h2>
          <p className="lead">Detect and Analyze Deepfake Videos and Images using CNN.</p>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={img1} alt="df" width={500} height={300}/>
            </div>
            <div className="col">
              <h2>What is Deepfake?</h2>
              <p className="text-start">Deepfake refers to the process of using artificial intelligence and machine learning techniques to create or alter digital content, 
                such as videos or images, to make them appear genuine but are actually manipulated or synthesized.Deepfake technology has the potential 
                for both positive and negative impacts, ranging from entertainment and creative applications to misinformation and fraud.</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col mt-5" id="image-detection">
              <h2>Image Detection</h2>
              <p className="text-start">Deepfake image detection is crucial to combat misinformation, protect privacy, and maintain trust in digital media. 
                 It helps prevent the spread of falsified content, safeguards individuals from identity theft, and ensures authenticity in 
                 online interactions. Detecting deepfakes also upholds ethical standards and promotes responsible use of technology.</p>
              <Link className="btn btn-primary" to="/image" role="button">Detect Image</Link>
            </div>
            <div className="col">
              <img src={img2} alt="df" width={500} height={300}/>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container" id="video-detection">
          <div className="row">
            <div className="col">
              <img src={img3} alt="df" width={500} height={300}/>
            </div>
            <div className="col mt-5">
              <h2>Video Detection</h2>
              <p className="text-start">Deepfake video detection is essential to combat misinformation, protect privacy, and preserve trust in media. 
                Detecting deepfakes helps prevent their malicious use in spreading fake news, manipulating public opinion,
                 and harming individuals' reputations. It also safeguards 
                against potential legal and ethical implications arising from the misuse of deepfake technology.</p>
              <Link className="btn btn-primary" to="/video" role="button">Detect Video</Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container mb-5">
          <div className="row">
          <div className="col-md-4 mx-auto">
            <div className='step'>
              <div className='step-icon'>
                  <img src={icon1} alt="df" className="rounded"width={30} height={40}  />
              </div>
              <br />
              <h4>Step1:Upload your video and image</h4>
              <p className="text-start"> 
                Choose a video or image file that you want to verify for authenticity.
                For best results, we recommend choosing a video or image file that is between 1 and 30 seconds
                long and does not have any edits or special effects.
              </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='step'>
                <div className='step-icon'>
                  <img src={icon2} alt="df" className="rounded"  width={50} height={50} />
                </div>
                <br />
                <h4>Step2:Check Deepfake</h4>
                <p className="text-start">
                After uploading your video or image file, click the "Detect Deepfake" button to start the verification process.
                </p>
              </div>
            </div>
            <div className="col-md-4">
            <div className='step'>
              <div className='step-icon'>
                  <img src={icon3} alt="df" className="rounded" width={50} height={50}  />
              </div>
              <br />
              <h4 className="col-mb-5">Step3:check the result</h4>
              <p className="text-start">
              You will receive a result that shows the video or image being either an 
              AI-generated deepfake or a natural video or audio. This information will help you determine the 
              authenticity of the video you have uploaded.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <p>Follow Us On Social Media</p>
              <a href="https://www.facebook.com/" target="_blank" className="text-white mx-2">
                <img src={con3} alt="fb" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="text-white mx-2">
                <img src={con2} alt="" />
              </a>
              <a href="https://twitter.com/" target="_blank" className="text-white mx-2">
                <img src={con1} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <p>&copy; 2024 Group 19 Deepfake Detection</p>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    </div>
  );
}
export default home;

