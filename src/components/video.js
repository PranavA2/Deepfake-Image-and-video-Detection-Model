import React, { useState } from 'react';
import axios from 'axios';
import icon1 from './static/upload.svg'
import icon2 from './static/search.svg'
import icon3 from './static/check.svg'
import './CSS/video.css'

const Video = () => {
  const [video, setVideo] = useState(null);
  const [videoResult, setVideoResult] = useState('');
  const [error, setError] = useState('');

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleVideoUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', video);

      const response = await axios.post('http://localhost:5000/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setVideoResult(response.data.result1);
    } catch (error) {
      setError('Error uploading video: ' + error.message);
    }
  };

  return (
    <div className="text- vid">
      <h2>Video Detection</h2>
      <div className='container d-flex align-items-center justify-content-center'>
        <input className="form-control w-25 text-center align-items-center mx-3" id='vid' type="file" accept="video/*" onChange={handleVideoChange} required />
        <button onClick={handleVideoUpload} className="btn btn-primary">Upload Video</button>
      </div>
      <br />
      <br />
      {video && <video src={URL.createObjectURL(video)} className="text-start" width={400} height={400} controls />}
      <br />
      <br />
      <h1>{videoResult && <p>{videoResult}</p>}</h1>
      <h1>{error && <p>{error}</p>}</h1>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className='step'>
              <div className='step-icon'>
                <img src={icon1} alt="df" className="rounded" width={30} height={40} />
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
                <img src={icon2} alt="df" className="rounded" width={50} height={50} />
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
                <img src={icon3} alt="df" className="rounded" width={50} height={50} />
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
  );
};
export default Video;
