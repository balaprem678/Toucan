import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

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
                <h5>Fabulous 5N Dubai honeymoon trip</h5>
                <ul>
                  <li>James Bond One Day Trip By Long Tail Boat</li>
                  <li>
                    Phi Phi island tour by Speedboat to marvel at colourful
                    marine life and exotic coral reefs
                  </li>
                  <li>
                    Single delight -04 island with lunch by speedboat exclude
                    island fee
                  </li>
                  <b>5 nights: </b>
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
                      ₹89,390 <span>/Person</span>
                    </p>
                    <button className="view-deal">Customise</button>
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
                <h5>6 nights 7 days United Arab Emirates Package for Couple</h5>
                <ul>
                  <li>James Bond One Day Trip By Long Tail Boat</li>
                  <li>
                    Phi Phi island tour by Speedboat to marvel at colourful
                    marine life and exotic coral reefs
                  </li>
                  <li>
                    Single delight -04 island with lunch by speedboat exclude
                    island fee
                  </li>
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
                      ₹1,36,169 <span>/Person</span>
                    </p>
                    <button className="view-deal">Customise</button>
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
                <h5>6 nights 7 days Relaxing United Arab Emirates attraction Tour Package for Couple</h5>
                <ul>
                  <li>James Bond One Day Trip By Long Tail Boat</li>
                  <li>
                    Phi Phi island tour by Speedboat to marvel at colourful
                    marine life and exotic coral reefs
                  </li>
                  <li>
                    Single delight -04 island with lunch by speedboat exclude
                    island fee
                  </li>
                  <b>6 nights:  Dubai</b>
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
                    <button className="view-deal">Customise</button>
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
                <h5>5 nights 6 days United Arab Emirates Package for Couple with Miracle Garden - A Walk Through World’s Largest Natural Flower Garden</h5>
                <ul>
                  <li>James Bond One Day Trip By Long Tail Boat</li>
                  <li>
                    Phi Phi island tour by Speedboat to marvel at colourful
                    marine life and exotic coral reefs
                  </li>
                  <li>
                    Single delight -04 island with lunch by speedboat exclude
                    island fee
                  </li>
                  <b>5 nights:  Dubai</b>
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
                      ₹47,771 <span>/Person</span>
                    </p>
                    <button className="view-deal">Customise</button>
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
