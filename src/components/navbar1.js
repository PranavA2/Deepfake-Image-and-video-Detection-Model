import React from 'react'
import { Link } from 'react-router-dom'

function navbar1() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <Link className="navbar-brand" >Deepfake Detection</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-10 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/image">Image Detection</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/video">Video Detection</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default navbar1
