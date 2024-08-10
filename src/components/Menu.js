import React from 'react'
import { Link } from "react-router-dom";
export default function Menu() {
  return (
<>
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img src='https://s3.wasabisys.com/pizzalavilla/2019/02/pizza-la-villa-pizzaria-logo_horizontal-black-offset.png' className="bi me-2" width="300" height="52"/>
      </Link>
      <ul className="nav nav-pills">
        <li className="nav-item">
        <Link to="/" className="nav-link " >Home</Link></li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item">
          <Link to="/items" className="nav-link">Store</Link></li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add New Item</Link></li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">ContactUs</Link></li>
      </ul>
    </header>
  </div>
  </>
  )
}
