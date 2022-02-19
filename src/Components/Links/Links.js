import React from "react";
import "./style.css";
import logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';

const Links = () => {
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
        <section id="links">
            <div class="container">
                <div>
                    <h4>Links</h4>
                    <div class="block"></div>
                </div>
                
                <div class="row">
                    <div class="columns">
                        <ul>
                            <h5>Internal Revenue Services</h5>
                            <li>Internal Revenue Service - <a href="https://www.irs.gov/">www.irs.gov</a></li>
                            <br />
                            <h5>Tax Research</h5>
                            <li>Applicable Federal Rates - <a href="www.pmstax.com\afr\index.html">www.pmstax.com\afr\index.html</a></li>
                            <li>Tax Penalty Calculator - <a href="www.taxpenalty.com/bkgound.asp">www.taxpenalty.com/bkgound.asp</a></li>
                            <li>Tax Library - <a href="www.taxlibrary.com">www.taxlibrary.com</a></li>
                            <br />
                            <h5>Charitable</h5>
                            <li>National Charities Information Bureau - <a href="https://www.give.org/">www.give.org</a></li>
                            <li>Charitable Organization Information List - <a href="www.guidestar.org">www.guidestar.org</a></li>
                            <li>Estate and Gift Tax Law - <a href="www.law.cornell.edu/topics/estate_planning.html">www.law.cornell.edu/topics/estate_planning.html</a></li>
                            <br />
                            <h5>Estate Planning</h5>
                            <li>Estate Planning Guide - <a href="www.dtonline.com/estate/toc.html">www.dtonline.com/estate/toc.html</a></li>
                            <li>Estate Tax Calculator - <a href="208.208.207.26/estateplanning/etcalcnew.html">208.208.207.26/estateplanning/etcalcnew.html</a></li>
                            <li>Valuation Estates, Evaluation and Estimates - <a href="www.estatevalue.com">www.estatevalue.com</a></li>
                            <li>Insurance Value Calculator - <a href="www.webmaster.itthartford.com/corporate/life/est_calc4.html">www.webmaster.itthartford.com/corporate/life/est_calc4.html</a></li>
                            <li>Social Security Calculator - <a href="www.socialsecurity.org/calc/calculator.html">www.socialsecurity.org/calc/calculator.html</a></li>
                            <li>Consumer Price Index (from 1946) - <a href="www.stls.frb.org/fred/data/cpi/cpiaucns">www.stls.frb.org/fred/data/cpi/cpiaucns</a></li>
                            <li>Social Security Law Materials - <a href="https://www.law.cornell.edu/wex/social_security">http://www.law.cornell.edu/topics/social_security.html</a></li>
                            <br />
                            <h5>State Taxes</h5>
                            <li>Sales and Use Tax Rates - <a href="https://www.salestaxinstitute.com/">www.salestaxinstitute.com</a></li>
                            <li>State Tax Forms - <a href="tasadmin.org\fta\forms\html">tasadmin.org\fta\forms\html</a></li>
                            <li>California Secretary of State - <a href="www.ss.ca.gov">www.ss.ca.gov</a></li>
                            <li>California Franchise Tax Board - <a href="https://www.ftb.ca.gov/">www.ftb.ca.gov</a></li>
                            <li>California State Board of Equalization - <a href="https://www.boe.ca.gov/">www.boe.ca.gov</a></li>
                            <li>California Employment Development Department - <a href="www.edd.cahwnet.gov">www.edd.cahwnet.gov</a></li>
                            <li>California Tax Forms - <a href="https://www.ftb.ca.gov/forms/index.html"> www.ftb.ca.gov/forms/index.html</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </React.Fragment>
  );
};

export default Links;