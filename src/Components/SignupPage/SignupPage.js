// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { useState } from "react";
// import "./style.css";

// const SignupPage = () => {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
    

//     const clientSignup = () => {

//         const data = { name: name, email: email, password: password };

//         axios.post("http://localhost:3001/Auth", data).then((response) => {
//             console.log(response.data);
//         });
//       };


//     return (
//       <React.Fragment>
          
//         <div className="text-center m-3-auto">
//             <h4>Create Account</h4>

//             <form>
//                 <p>
//                     <label>Name</label><br/>
//                     <input type="name" name="name" autoComplete="off"
//                     onChange={(event) => {
//                         setName(event.target.value);
//                       }}
//                        required /> 
                    
//                 </p>

//                 <p>
//                     <label>Email address</label><br/>
//                     <input type="email" name="email" required
//                     onChange={(event) => {
//                         setEmail(event.target.value);
//                       }}
//                     />
//                 </p>

//                 <p>
//                 <label>Password</label><br/>
//                     <input type="password" name="password" required
//                     onChange={(event) => {
//                         setPassword(event.target.value);
//                       }}
//                     />
//                 </p>

//                 <p>
//                     <button id="sub_btn" type="submit" onClick={clientSignup}>Register</button>
//                 </p>

//             </form>
    
//                 <p><Link to="/login">Back to Login</Link></p> 
//                 <p><Link to="/">Back to Homepage</Link></p>
            

//         </div>

//       </React.Fragment>
//     );
//   };
  
//   export default SignupPage;

import React from "react";
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logo from "../../Assets/logo.png";
import "./style.css";

function SignupPage() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    email: Yup.string().min(8).max(40).required(),
    password: Yup.string().min(8).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("https://taxes-edrosolancpa.herokuapp.com/Auth", data).then(() => {
      alert ("Registration Successful");
    });
  };

  return (
    <div className="text-center m-3-auto">
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

       
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
          
        <Form>

            <h4>Create Account</h4>
            <p>     
            <label>Name</label><br/>
            <ErrorMessage name="name" component="span" />
            <Field autoComplete="off" name="name"/>
            </p>     
            <p>    
            <label>Email</label><br/>
            <ErrorMessage name="email" component="span" />
            <Field autoComplete="off" name="email"/>
            </p> 
            <p>
            <label>Password</label><br/>
            <ErrorMessage name="password" component="span" />
            <Field autoComplete="off" type="password" name="password"/>
            </p>

            <button id="sub_btn" type="submit"> Register</button>

        </Form>

      </Formik>

      <p><Link to="/login">Back to Login</Link></p> 
      <p><Link to="/">Hide</Link></p>
<br/>
    </div>
  );
}

export default SignupPage;