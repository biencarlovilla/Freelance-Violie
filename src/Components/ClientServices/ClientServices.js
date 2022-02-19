import React from "react";
import "./style.css";
import logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';

const ClientServices = () => {
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
     <section id="clientservices">
        <div class="container"> 
            <div> 
                <h4>Client Services</h4>
                <div class="block"></div>
            </div>
           
            <div class="row">
                <div class="columns">
                    <p>
                        My Firm provides a wide range of services. My services are always provided in a timely and accurate fashion.
                        To get to know you. your first cosultation is free. 
                    </p>
                        <br />
                    <p>
                        Services I provide includes the following:
                    </p>
                        <br />
                    <ul>
                        <li>General ledger and financial statement preparation.</li>
                        <li>Bookkeeping/Write-Up services.</li>
                        <li>Accounting system setup.</li>
                        <li>Computerized payroll services.</li>
                        <li>Sales and Use tax return preparation.</li>
                        <li>Personal financial statement.</li>
                        <li>Tax Planning.</li>
                        <li>Tax Preparation for individuals, partnerships, corporations, 
                            s corporation, limited liability companies, trust, estates
                            and not for profit organization.</li>
                        <li>Audit representation before IRS and/or various state agencies</li>
                    </ul>
                        <br />
                    <p>
                        My schedule of fees will be provided on your first consultation appointment.
                    </p>
                </div>
            </div>

          
        </div>
     </section>
    </React.Fragment>
  );
};

export default ClientServices;