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
          <h1 className="head-content">Kashmir Vacation Packages</h1>
          <p className="head-para-content">
            How can you perfect a Kashmir trip? Be it watching the sunset at
            Changi Point Coastal walk, dining at soaring heights of Jewel Box,
            taking the cable car ride at Mount Faber Peak with your partner or
            relishing in the luxury of Marina Bay Sands, a perfect Kashmir
            package can certainly adds up to couples post-marital bliss. Be it
            taking a leisure walk in the lush greenery of the Botanical Gardens,
            unwinding at the beaches of Sentosa, indulging in luxury shopping at
            Orchard’s Road, or sipping luscious coffee in the mural arts streets
            of Haji Lane, our Kashmir package for couple incorporates the best
            places that the lion city has to offer. Be it absorbing panoramic
            views of the city from exhilarating heights at Kashmir Flyer,
            watching the lights and laser show at Marina Bay Sands, basking in
            the tranquil at St. John’s Island, cruising away at Clarke Quay or
            taking a stroll down the Gardens of the bay for a view of the
            Supertree Grove, Kashmir has a bit of everything to suit all kinds
            of travellers. With Pickyourtrail’s Kashmir packages, make your
            customisable
            <strong>Kashmir packages</strong> special and make memories to
            cherish for a lifetime. Pickyourtrail also offers International
            Honeymoon Packages for other destinations!
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
                      ₹53,192 <span>/Person</span>
                    </p>
                    <Link to={"/KashmirTourPackagesPlan1"} className="nav-link">
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
                <h5>Amazing Kashmir Tour Package </h5>
                <ul>
                  <li>
                    Explore the scenic beauty of Kashmir, with this 4 nights 5
                    days Kashmir package. The Kashmir tour itinerary takes you
                    to the beautiful cities of Srinagar, Pahalgam, Gulmarg, and
                    Sonamarg. The spectacular sceneries and the pleasant weather
                    of these green valleys make Kashmir one of most loved
                    holiday destinations in India. Going for a vacation in these
                    breathtaking expanses is one of the best ways to admire and
                    appreciate the breathtaking beauty of Kashmir.
                  </li>

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
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        FLIGHTS
                      </span>{" "}
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        TRANSFERS
                      </span>{" "}
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
                        Food
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹13,000 <span>/Person</span>
                    </p>
                    <Link to={"/KashmirTourPackagesPlan2"} className="nav-link">
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
                <h5>Charismatic 3 Nights 4 Days Kashmir Tour Packages</h5>
                <ul>
                  <li>Shikara ride on Dal Lake in Srinagar</li>
                  <li>Excursion to Pahalgam and Martand Sun Temple</li>
                  <li>
                    Optional trip to Betaab Valley and adventure activities
                  </li>
                  <li>Optional pony ride and gondola ride in Gulmarg</li>

                  <b>4 Days & 3 Nights</b>
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
                    <Link to={"/KashmirTourPackagesPlan3"} className="nav-link">
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
                <h5>Blissful Kashmir Honeymoon Package</h5>
                <ul>
                  <li>
                    A famous honeymoon destination in India, Kashmir has always
                    been proclaimed by couples and honeymooners as the perfect
                    place for a romantic getaway. JK tourism not only promises a
                    safe and secure stay but has also reinvented itself to cater
                    to the diverse and myriad flock of tourists.
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
                    <Link to={"/KashmirTourPackagesPlan4"} className="nav-link">
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
