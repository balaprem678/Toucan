import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

import { Link } from "react-router-dom";

// images
import Nishat_Bagh from "../../img/KashmirTourPackages/Nishat Bagh.jpeg";
import House_boat from "../../img/KashmirTourPackages/House-boat.webp";
import p2 from "../../img/KashmirTourPackages/p2.webp";
import p4 from "../../img/KashmirTourPackages/p4.jpeg";

import Navigation from "../Navigation";
import Footer from "../Footer";

function KashmirTourPackages() {
  return (
    <div className="KashmirTourPackages">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Kashmir Vacation Packages</h4>
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
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={Nishat_Bagh} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Mystical Kashmir Vacation</h5>
                <ul>
                  <li>
                    Experience the colourful culture of Kashmir on this
                    vacation. Indulge in a relaxing houseboat stay over the
                    scenic lake in Srinagar, trek to Ningle Nallah in Gulmarg
                    and camp at the picturesque Lidder Valley in Pahalgam.
                  </li>

                  <b>5 nights: 6 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 Hotels
                      </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 FLIGHTS
                      </span>{" "}
                     <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        5 TRANSFERS
                      </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        7 Activities
                      </span><br />
                      
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
                      ₹53,192 <span>/Person</span>
                    </p>
                    <Link to={"/KashmirTourPackagesPlan"} className="nav-link">
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
                <img src={House_boat} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Magnificent Kashmir Holiday</h5>
                <ul>
                  <li>
                    Unwind in the verdant valleys of Kashmir with this week-long
                    vacation! Stay at a traditional houseboat in Srinagar, ride
                    the Gulmarg Gondola and visit Pahalgam valleys.
                  </li>

                  <b>6 nights: 7 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 Hotels
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 FLIGHTS
                      </span>{" "}
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        6 TRANSFERS
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        8 Activities
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
                      ₹42,505 <span>/Person</span>
                    </p>
                    <Link to={"/KashmirTourPackagesPlan"} className="nav-link">
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
                <img src={p2} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Delightful Kashmir Holiday</h5>
                <ul>
                  <li>
                    Explore the charming cities of Kashmir with this special
                    package including flights. Visit Nishat Bagh in Srinagar,
                    enjoy skiing in Gulmarg and visit Pahalgam valley.
                  </li>

                  <b>6 nights: 7 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 Hotels
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 FLIGHTS
                      </span>{" "}
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        6 TRANSFERS
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        9 Activities
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
                      ₹40,435 <span>/Person</span>
                    </p>
                    <Link to={"/KashmirTourPackagesPlan"} className="nav-link">
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
                <img src={p4} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Dreamy Kashmir Vacation</h5>
                <ul>
                  <li>
                    Discover the magic of Kashmir on this vacation. Admire the
                    Dal Lake in Srinagar, explore the beautiful valleys of
                    Gulmarg and enjoy white water rafting in Pahalgam.
                  </li>

                  <b>5 nights: 6 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 Hotels
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 FLIGHTS
                      </span>{" "}
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        5 TRANSFERS
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        7 Activities
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
                      ₹39,575 <span>/Person</span>
                    </p>
                    <Link to={"/KashmirTourPackagesPlan"} className="nav-link">
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

export default KashmirTourPackages;
