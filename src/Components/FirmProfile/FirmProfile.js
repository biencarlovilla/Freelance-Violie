import React from "react";
import "./style.css";
import logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';


const FirmProfile = () => {


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
                        <p>
                            My philosophy is to be of service at all times. I provide close personal business relation with my clients.
                            it is this valuable business relationship that helps me give the best service to my clientele. I augment my 
                            knowledge by regularly and continuoudly take professional continuing education, constant upgrade and acquisition
                            of state-of-the-art computer equipment and software, subscription to accounting, business and tax books and 
                            extensive professional business relations. 
                        </p>
                        <br />
                    </div>
                </div>

                <div class="row">
                    <h5>Experience</h5>
                        <p>I have been in public practice since 1984. My business clients include dental practices, physicians, architects 
                            graphic designers, lawyers, child care facilities, residential care homes, medical billing practice and various
                            other service type enterprises.
                        </p>
                        <br />
                </div>

                <div class="row">
                    <h5>Education</h5>
                        <p>I was admitted to practice as a Certified Public Accountant in the Philippines and by the State of California in June 1983
                            I am a graduate of the Far Eastern University in Manila, Philippines. I hold a Bacherlor's Degree in Business Administration.
                            Also, I have taken courses at San Francisco State University and UC Berkeley not only to meet the education requirement of the 
                            California State Board of Accountancy but also to further my knowledge in other subject
                        </p>
                </div>
            </div>
            
        </section>
      </React.Fragment>
    );
  };
  
  export default FirmProfile;