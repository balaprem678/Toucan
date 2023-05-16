import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

import { Link } from "react-router-dom";

// images

import dubai from "../../img/dubai-honey-moon/dubai.avif";
import BlueWaters_Final from "../../img/dubai-honey-moon/BlueWaters_Final.avif";
import dubai_2 from "../../img/dubai-honey-moon/dubai-2.avif";
import dubai_1 from "../../img/dubai-honey-moon/dubai-1.avif";

import Navigation from "../Navigation";
import Footer from "../Footer";

function DubaiHoneyMoon() {
  return (
    <div className="DubaiHoneyMoon">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">DubaiHoneyMoon Vacation Packages</h4>
        <h1 className="head-1">
          Discover ancient ruins and relaxing beach resorts and buddhist temples
        </h1>
        <a href="">
          <button className="head-button">
            View All Packages{" "}
            <span class="material-symbols-outlined">
              keyboard_double_arrow_down
            </span>
          </button>
        </a>
      </div>
      <div className="Thailand-content margin">
        <div className="container">
          <h1 className="head-content">Dubai Honeymoon Packages</h1>
          <p className="head-para-content">
            Planning to visit Dubai with your partner anytime soon? Choose Dubai
            Honeymoon Packages to explore Dubai and have the best travel
            experiences ever. This glamorous city has huge buildings,
            jaw-dropping architectural marvels, plenty of adventure parks,
            wonderful views from the desert, gigantic shopping malls and of
            course, royal vibes! It is an amazing blend of rich culture and
            modern technology which must be explored on a honeymoon trip to
            Dubai. You just cannot miss the fantastic marina dinner cruise,
            intimidating hot air balloon ride, views of Dubai Fountain and a lot
            more. So, don’t wait, surprise your other half with an unforgettable
            Dubai trip and cherish the moments forever!
          </p>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={dubai} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Romantic Dubai Honeymoon Tour Package </h5>
                <ul>
                  <li>
                    Enjoy the evening with your sweetheart aboard the famed Dhow
                    Cruise
                  </li>
                  <li>Explore the numerous charms of Dubai on a city tour</li>
                  <li>
                    Get your pictures clicked with your beloved at Atlantis, The
                    Palm
                  </li>
                  <li>Have fun at the Dubai Desert Safari</li>
                  <b>5 Days & 4 Nights</b>
                  <strong> Dubai</strong>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        3 Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        5 Activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Visa
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        2 Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹90,500 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiHoneymoonPlan1"} className="nav-link">
                      <button className="view-deal">View All Plan</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={BlueWaters_Final} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Splendor of Dubai Honeymoon Package</h5>
                <ul>
                  <li>
                    If you are planning to have a lavish sort of a honeymoon but
                    have restraint budget, then do not fret, Dubai packages for
                    couples are crafted with love and care so that the couples
                    get the most in the least prices.
                  </li>
                  <li>
                    These packages aims to provide you with the best amenities
                    and all the sightseeing at the pocket friendly prices.
                  </li>
                  <li>
                    Also, as this package is honeymoon friendly, it is created
                    with special touch of romance and love in each of the days.
                  </li>
                  <b>7 Days & 6 Nights </b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        7 Activities
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Visa
                      </span>{" "}
                      <br />
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        2 Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹49,998 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiHoneymoonPlan3"} className="nav-link">
                      <button className="view-deal">View All Plan</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={dubai_2} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Dubai Honeymoon Package For 6 Nights 7 Days </h5>
                <ul>
                  <li>Experience Dhow Cruise</li>
                  <li>City Tour of Dubai</li>
                  <li>Visit Dolphinarium</li>
                  <li>Enjoy Desert Safari</li>
                  <b>6 nights: Dubai</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Activities
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Visa
                      </span>{" "}
                      <br />
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        2 Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹85,104 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiHoneymoonPlan3"} className="nav-link">
                      <button className="view-deal">View All Plan</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={dubai_1} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Sensuous Dubai Honeymoon With Palm Atlantis Stay</h5>
                <ul>
                  <li>
                    Romance your beloved at a beautiful, exotic location like
                    Dubai with our scintillating and utterly romantic 5 night 6
                    days Dubai package, that has been specially crafted for your
                    lovey-dovey getaway. Sail along the Dubai Creek in a
                    romantic Dhow Cruise and explore the two most happening
                    cities of UAE- Dubai and Abu Dhabi.
                  </li>
                
                  <b>6 Days & 5 Nights </b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        6 Activities
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Visa
                      </span>{" "}
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹50,000 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiHoneymoonPlan4"} className="nav-link">
                      <button className="view-deal">View All Plan</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DubaiHoneyMoon;
