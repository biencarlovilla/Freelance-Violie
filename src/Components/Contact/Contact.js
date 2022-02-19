import React from "react";
import "./style.css";
import logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <React.Fragment>
        <div class="main_nav">
          <div class="container">
            <div class="mobile-toggle"> <span></span> <span></span> <span></span></div>
              <nav>
                <ul>
                  <li><Link to="/firmprofile">Firm Profile</Link></li>
                  <li><Link to="/clientservices">Client Services</Link></li>
                  <li><Link to="/taxnews">Tax News</Link></li>
                  <li><Link to="/links">Links</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/login">Login/SignUp</Link></li>
                </ul>
              </nav>
          </div>
        </div>

        <div class="title">
          <div class="row">
            <div class="columns">
              <img src={logo} alt="logo" height="40" width="650" />
            </div>
          </div>

          <div class="mainnav">
            <div class="mobile-toggle"> <span></span> <span></span> <span></span></div>
              <nav>
                <ul>
                  <li><Link to="/firmprofile">Firm Profile</Link></li>
                  <li><Link to="/clientservices">Client Services</Link></li>
                  <li><Link to="/taxnews">Tax News</Link></li>
                  <li><Link to="/links">Links</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/login">Login/SignUp</Link></li>
                  
                </ul>
              </nav>
          </div>


          <a class="smoothscroll" href="#firmprofile">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
          </a> 

        </div>
        <section id="contact">
            <div class="container"> 
                <div>
                    <h4>Contact</h4>
                <div class="block"></div>
                </div>
            </div>
        </section>

        <section id="information">
            <div class="row">
                <div class="columns">

                        <i class="user icon "></i>Violie S. Edrosolan
                        <br />
                        <i class="map marker alternate icon"></i>1580 Bryant Street, Suite A Daly City, CA 94015
                        <br />
                        <i class="envelope icon"></i>violie@edrosolancpa.com
                        <br />
                        <i class="mobile alternate icon"></i>(650)-991-3334
                        <br />
                        <i class="mobile alternate icon"></i>(650)-991-0867
                </div>
            </div>
        </section>
    </React.Fragment>
  );
};

export default Contact;