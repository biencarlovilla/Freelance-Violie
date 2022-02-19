// import { Link } from 'react-router-dom';
// import React, { useState } from "react";
// import axios from "axios";
// import "./style.css";

// function LoginPage() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const clientLogin = () => {
        
//         const data = { email: email, password: password };

//         axios.post("http://localhost:3001/Auth/login", data).then((response) => {
//             console.log(response.data);
//         });
//       };

//     return (
//       <React.Fragment>
          
//          <div className="text-center m-5-auto">
//             <h3>Log in to account</h3>
//             <form>
//                 <p>
//                 <label>Email Address</label><br/>
//                     <input type="email" name="email" autoComplete="off" required 
//                         onChange={(event) => {
//                         setEmail(event.target.value);
//                       }}
//                     /> 
//                 </p>
//                 <p>
//                     <label>Password</label>
//                     <br/>
//                     <input type="password" name="password" autoComplete="off" required
//                         onChange={(event) => {
//                         setPassword(event.target.value);
//                       }}
//                     />
//                 </p>
//                 <p>
//                     <button id="sub_btn" onClick={clientLogin}>Login</button>
//                 </p>

//             </form>s
            
//                 <p><Link to="/signup">Create an Account</Link></p>
//                 <p><Link to="/">Back to Homepage</Link></p>
            
//         </div>
//       </React.Fragment>
//     );
//   };
  
//   export default LoginPage;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import logo from "../../Assets/logo.png";
import "./style.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/Auth/login", data).then(() => {
        window.location.replace("/profile");
    });
  };
  return (
     <div className="text-center m-5-auto">

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

    

<div id="form">
    <h4>Log in to Account</h4>
    <p>
      <label>Email</label><br/>
      <input type="text" onChange={(event) => {setEmail(event.target.value);}}/>
    </p>

    <p>
      <label>Password</label><br/>
      <input type="password" onChange={(event) => {setPassword(event.target.value);}}/>
    </p>

      <button id="sub_btn" onClick={login}> Login </button>

</div>

    <p><Link to="/signup">Create an Account</Link></p>
    <p><Link to="/">Hide</Link></p>


    </div>

  );
}

export default LoginPage;
