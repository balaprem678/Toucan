import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

// images
import p1 from "../../img/singapore/p1.webp";
import p8 from "../../img/singapore/p8.webp";
import p16 from "../../img/singapore/p16.webp";

import { Link } from "react-router-dom";

import Navigation from "../Navigation";
import Footer from "../Footer";

function SingaporeTourPackages() {
  return (
    <div className="SingaporeTourPackages">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Singapore Vacation Packages</h4>
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
          <h1 className="head-content">Singapore Vacation Packages</h1>
          <p className="head-para-content">
            How can you perfect a Singapore honeymoon trip? Be it watching the
            sunset at Changi Point Coastal walk, dining at soaring heights of
            Jewel Box, taking the cable car ride at Mount Faber Peak with your
            partner or relishing in the luxury of Marina Bay Sands, a perfect
            Singapore honeymoon package can certainly adds up to couples
            post-marital bliss. Be it taking a leisure walk in the lush greenery
            of the Botanical Gardens, unwinding at the beaches of Sentosa,
            indulging in luxury shopping at Orchard’s Road, or sipping luscious
            coffee in the mural arts streets of Haji Lane, our Singapore package
            for couple incorporates the best places that the lion city has to
            offer. Be it absorbing panoramic views of the city from exhilarating
            heights at Singapore Flyer, watching the lights and laser show at
            Marina Bay Sands, basking in the tranquil at St. John’s Island,
            cruising away at Clarke Quay or taking a stroll down the Gardens of
            the bay for a view of the Supertree Grove, Singapore has a bit of
            everything to suit all kinds of honeymoon travellers. With
            Pickyourtrail’s Singapore honeymoon packages, make your customisable
            <strong>Singapore honeymoon packages</strong> special and make
            memories to cherish for a lifetime. Pickyourtrail also offers
            International Honeymoon Packages for other destinations!
          </p>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={p1} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Asian Extravaganza - Luxury At Singapore</h5>
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
                        Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹74,998 <span>/Person</span>
                    </p>
                    <Link
                      to={"/SingaporeTourPackagesPlan1"}
                      className="nav-link"
                    >
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
                <img src={p8} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Splendid Singapore And Bali Family Package </h5>
                <ul>
                  <li>
                    Visit to Night Safari- a nocturnal zoo & have an enigmatic
                    evening
                  </li>
                  <li>
                    Enjoy movie-themed rides & other attractions at Universal
                    Studios
                  </li>
                  <li>Visit Mount Batur, Monkey Forest & more in Bali</li>

                  <b>7 Days & 6 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹50,000 <span>/Person</span>
                    </p>
                    <Link
                      to={"/SingaporeTourPackagesPlan2"}
                      className="nav-link"
                    >
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
                <img src={p16} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>
                  Experience the Thrill of LEGOLAND® and Universal Studio{" "}
                </h5>
                <ul>
                  <li>Go sky high on the cable car ride at Sentosa Island</li>
                  <li>Spend a day exploring LEGOLAND® and its many charms</li>
                  <li>Catch a show of the popular Wings Of Time</li>

                  <b>5 Days & 4 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotels
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹30,999 <span>/Person</span>
                    </p>
                    <Link
                      to={"/SingaporeTourPackagesPlan3"}
                      className="nav-link"
                    >
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

export default SingaporeTourPackages;
