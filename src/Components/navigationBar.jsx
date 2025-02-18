import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faMagnifyingGlass , faUpload } from "@fortawesome/free-solid-svg-icons";
import logo from "/src/assets/Logo.jpg";
import './navbar.css'
import { Link } from 'react-router-dom';
export default function NavigationBar() {
  return (
    <>
      <div className="mainnav">
        <div className="img">
            <img src={logo} alt="" />
        </div>
        <ul className="navlist">
            <Link to='/'><li><FontAwesomeIcon icon={faHouse} />Home</li></Link>
            <Link to='/BrowseBooksList'><li><FontAwesomeIcon icon={faMagnifyingGlass} />Browse Books</li></Link>
            <Link to='/addBook'><li><FontAwesomeIcon icon={faUpload} />Add Books</li></Link>
        </ul>
      </div>
    </>
  )
}
