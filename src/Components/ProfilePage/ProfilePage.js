import React from "react";
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.png";

function ProfilePage() {
  return (
    <React.Fragment>
    <div className="text-center m-3-auto">
         <div class="main_nav">
          <div class="container">
            <div class="mobile-toggle"> <span></span> <span></span> <span></span></div>
              <nav>
                <ul>

                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/login">Logout</Link></li>
                 
                  {/* <li><a class="smoothscroll" href="#loginpage"><Link to="/login">Login/SignUp</Link></a></li> */}
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
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/login">Logout</Link></li>
                  
                </ul>
              </nav>
          </div>


          <a class="smoothscroll" href="#firmprofile">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
          </a> 

        </div>

        <a class="smoothscroll" href="#profile">
          <div class="scroll-down"></div>
        </a> 

        <div class="profile">
            <div class="container"> 
                <div> 
                  <h1>Welcome to your account</h1> <br/>
                  <h4>Send us your files: </h4>
                  <a href="mailto:karlo@kate.edrosolancpa.com"><input class="button-primary" type="submit" value="Upload" /></a>
                </div>
            </div>
        </div>



    </div>

<br/>
        
    </React.Fragment>
  );
};

export default ProfilePage;

