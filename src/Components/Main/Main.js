import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import "./style.css";


const Main = () => {

  return (
    <React.Fragment>
      <header id="header">
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

        <a class="smoothscroll" href="#firmprofile">
          <div class="scroll-down"></div>
        </a> 
        <section id="firmprofile">
        
        <div class="container">

            

            <div>
                <h4>Firm Profile</h4>
                <div class="block"></div>
            </div>
            
            <div class="row">
                <div class="columns">
                    <p>
                        Welcome to my website. In all my years in public practice, I'm always committed to providing the 
                        highest quality professional service. It is this desire that led me to the Internet. It is in the
                        internet that my clients can access my professional services and guidance at any moment my services are needed.
                    </p>
                    <br />
                </div>
            </div>

          

            
        </div>
        
    </section>
      </header>
    </React.Fragment>
  );
};

export default Main;