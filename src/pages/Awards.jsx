import React from 'react'
import "./awards.scss"
import DownloadCVButton from './DownloadCVButton'
import { Link } from 'react-router-dom'
// import hotel from "../../components/images/hotel"
// import hotel from "../components/images"

const Awards = () => {
  return (
    <div className='projects'>
      <h2 className="title">My <br/>Projects</h2>
      <div className="cards">
        <div className="card">
          <Link to="https://hotel-reservation-app-uesu.onrender.com/">
        <h3 className="title">Hotel Reservation system</h3>
        <img src="" className='project' alt="" />
          </Link>
        </div>
        <div className="card">
          <Link to="https://property-management-rh6h.onrender.com/">
          <h3 className="title">Property management system</h3>
          <img src="https://property-management-rh6h.onrender.com/" className='project' alt="" />
          </Link>
        </div>
        <div className="card">
          <h3 className="title">
          coming up
          </h3>
        </div>
        <div className="card">
          <h3 className="title">
            coming up
          </h3>
        </div>
        <div className="card">
          <h3 className="title">
            Coming up
          </h3>
        </div>
      </div>
     <DownloadCVButton/>
    </div>
  )
}

export default Awards