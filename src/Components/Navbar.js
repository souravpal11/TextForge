import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Photo from '../photo.png'

export default function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <nav
  className={`navbar navbar-expand-lg navbar-${props.mode}`}
  style={{
    background:
      props.mode === "dark"
        ? "linear-gradient(90deg, #141e30, #243b55)"
        : "#f8f9fa",
    boxShadow:
      props.mode === "dark"
        ? "0 4px 15px rgba(0,0,0,0.4)"
        : "0 2px 10px rgba(0,0,0,0.1)"
  }}
>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">{props.title}  </a> */}
    <img src={Photo} alt="Logo" style={{ width: "150px", height: "50px", marginRight: "10px" }} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    
    <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
      <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title Here",
    about: "About"
}