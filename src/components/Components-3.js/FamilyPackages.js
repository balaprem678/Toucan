import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import { Link } from "react-router-dom";

import React from "react";

// images
import Himachal_Tour from "../../img/Family Package/Himachal_Tour_(6_Nights7_Days)_h.jpg";
import Shillong from "../../img/Family Package/Shillong_(5_Night_6_Days)_h.jpg";
import HIGHLIGHTS_OF_GUJARAT from "../../img/Family Package/HIGHLIGHTS_OF_GUJARAT_(10_Nights_11_Days)_h.jpg";

import Navigation from "../Navigation";
import Footer from "../Footer";

function FamilyPackage() {
  return (
    <div className="FamilyPackage">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2"> Family Packages</h4>
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
          <h1 className="head-content">Family Tour Packages</h1>
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
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={Himachal_Tour} alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Himachal Tour</h5>
                <ul>
                  <li>Best Price Guaranteed</li>
                  <li>Travel Within Budget</li>
                  <b>6 Nights / 7 Days </b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        PickUp
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Food
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹13,500 <span>/Person</span>
                    </p>
                    <Link to={"/HimachalPlan"} className="nav-link">
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
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={Shillong} alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Shillong</h5>
                <ul>
                  <li>Best Price Guaranteed</li>
                  <li>Travel Within Budget</li>
                  <b>5 Nights / 6 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        PickUp
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Food
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹29,999 <span>/Person</span>
                    </p>
                    <Link to={"/ShillongPlan"} className="nav-link">
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
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={HIGHLIGHTS_OF_GUJARAT} alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Highlights Of Gujarat</h5>
                <ul>
                  <li>Best Price Guaranteed</li>
                  <li>Travel Within Budget</li>
                  <b>10 Nights / 11 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        PickUp
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Food
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹37,900 <span>/Person</span>
                    </p>
                    <Link to={"/GujaratPlan"} className="nav-link">
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

export default FamilyPackage;
