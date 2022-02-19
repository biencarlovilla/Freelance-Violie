import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./Components/Main/Main";
import FirmProfile from "./Components/FirmProfile/FirmProfile";
import ClientServices from "./Components/ClientServices/ClientServices";
import TaxNews from "./Components/TaxNews/TaxNews";
import Links from "./Components/Links/Links";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/SignupPage/SignupPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import "./App.css";

function App() {

  return ( 
    <React.Fragment>
  <div className="App">
  <Router>
  <div className="navbar">
      <Link to="/"></Link>
      <Link to="/login"></Link>
      <Link to="/signup"></Link>
      <Link to="/profile"></Link>
      <Link to="/firmprofile"></Link>
      <Link to="/clientservices"></Link>
      <Link to="/taxnews"></Link>
      <Link to="/links"></Link>
      <Link to="/contact"></Link>
  </div>
      <Routes>
        <Route path="/" exact element={< Main />} /> 
        <Route path="/login" exact element={< LoginPage />} />
        <Route path="/signup" exact element={< SignupPage />} />
        <Route path="/profile" exact element={< ProfilePage />} />
        <Route path="/firmprofile" exact element={< FirmProfile />} /> 
        <Route path="/clientservices" exact element={< ClientServices />} /> 
        <Route path="/taxnews" exact element={< TaxNews />} /> 
        <Route path="/links" exact element={< Links />} /> 
        <Route path="/contact" exact element={< Contact />} /> 
      </Routes>
    </Router>


      <Footer />
  </div>

  </React.Fragment>
  
  );
}

// class App extends Component {
//   render()
//    {
//     return (
//       <React.Fragment>
//         <Router> 
    
//           <Main />

//             <Routes>
//               <Route path="/login" element={< LoginPage />} />
//             </Routes>

//             <Routes>
//               <Route path="/signup" element={< SignupPage />} />
//             </Routes>

//           <FirmProfile />
//           <ClientServices />
//           <TaxNews />
//           <Links />
//           <Contact />
//           <Footer />

//         </Router>   
//       </React.Fragment>
//     );
//   }
// }

export default App;