import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar1.css";
import naturi from'../assests/naturi.png';
import { useNavigate } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Navbar1() {

  const navigate = useNavigate();

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={naturi} alt="Sri Venkateswara Agripoducts pvt ltd" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/landingpage"
                  end
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
               <NavLink
                  className="nav-link"
                 to="/about"
                >
                  ABOUT
                </NavLink> 
              </li>
              <li className="nav-item dropdown">
                <Nav.Link
                  className="nav-link dropdown-toggle"
                  href="#ourproducts"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACHIEVEMENTS
                </Nav.Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/achievements">
                      DEVELOPMENT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/vegetablesseeds">
                      CMR FUNDS
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Nav.Link
                  className="nav-link dropdown-toggle"
                  href="#ourproducts"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MULTIMEDIA
                </Nav.Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/fieldcrops">
                      GALLERY
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/vegetablesseeds">
                      VIDEOS
                    </NavLink>
                  </li>
                   <li>
                    <NavLink className="dropdown-item" to="/vegetablesseeds">
                      PRESS
                    </NavLink>
                  </li>
                </ul>
              </li>
               <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/accomplishment"
                >
                  ACCOMPLISHMENT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to='/contact'
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
              <button className="btn" type="login" onClick={()=> navigate("/login")} >
                Login
              </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Navbar1;