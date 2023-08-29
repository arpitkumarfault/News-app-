import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-info bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{ color: "white" }}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        {/* <a className="nav-link  " style={{ color: "white" }} aria-current="page" to="/">Home</a> */}
          <li className="nav-link"><Link className="nav-link" style={{ color: "white" }} to="/">Home</Link></li>
          <li className="nav-link"><Link className="nav-link" style={{ color: "white" }} to="/business">Business</Link></li>
          <li className="nav-link"><Link className="nav-link" style={{ color: "white" }} to="/entertainment">Entertainment</Link></li>
          <li className="nav-link"><Link className="nav-link" style={{ color: "white" }} to="/generalhealth">Generalhealth</Link></li>
          <li className="nav-link"><Link className="nav-link" style={{ color: "white" }} to="/sciencesports">Sciencesports</Link></li>
          <li className="nav-link"><Link className="nav-link" style={{ color: "white" }} to="/technology">Technology</Link></li>
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}
