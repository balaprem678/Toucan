import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

import { Link } from "react-router-dom";

// images
import p1 from "../../img/malaysia/p1.webp";
import p2 from "../../img/malaysia/p2.jpg";
import p3 from "../../img/malaysia/p3.webp";
import p4 from "../../img/malaysia/p4.webp";
import p5 from "../../img/malaysia/p5.webp";

import Navigation from "../Navigation";
import Footer from "../Footer";

function MalaysiaTourPackages() {
  return (
    <div className="MalaysiaTourPackages">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Malaysia Vacation Packages</h4>
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
          <h1 className="head-content">Malaysia Vacation Packages</h1>
          <p className="head-para-content">
            How can you perfect a Malaysia honeymoon trip? Be it watching the
            sunset at Changi Point Coastal walk, dining at soaring heights of
            Jewel Box, taking the cable car ride at Mount Faber Peak with your
            partner or relishing in the luxury of Marina Bay Sands, a perfect
            Malaysia honeymoon package can certainly adds up to couples
            post-marital bliss. Be it taking a leisure walk in the lush greenery
            of the Botanical Gardens, unwinding at the beaches of Sentosa,
            indulging in luxury shopping at Orchard’s Road, or sipping luscious
            coffee in the mural arts streets of Haji Lane, our Malaysia package
            for couple incorporates the best places that the lion city has to
            offer. Be it absorbing panoramic views of the city from exhilarating
            heights at Malaysia Flyer, watching the lights and laser show at
            Marina Bay Sands, basking in the tranquil at St. John’s Island,
            cruising away at Clarke Quay or taking a stroll down the Gardens of
            the bay for a view of the Supertree Grove, Malaysia has a bit of
            everything to suit all kinds of honeymoon travellers. With
            Pickyourtrail’s Malaysia honeymoon packages, make your customisable
            <strong>Malaysia honeymoon packages</strong> special and make
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
                <h5>Marvelous Malaysia Tour Package</h5>
                <ul>
                  <li>
                    Grab this well-designed 2 nights, 3 days Malaysia tour
                    package for a trip to treasure for a lifetime. The vacation
                    takes you through the amazing and lively Kuala Lumpur – the
                    bustling capital city.{" "}
                  </li>
                  <li>
                    Throughout your stay, you will delight in a number of
                    attractions dotted all over. With this tour package to
                    Malaysia, you will come across some of the best attractions
                    of Kuala Lumpur and surrounding areas, one of those being
                    Genting Highlands.
                  </li>

                  <b>3 Days & 2 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Flights
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotel
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Activities &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹20,000<span>/Person</span>
                    </p>
                    <Link
                      to={"/MalaysiaTourPackagesPlan1"}
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
                <img src={p2} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Refreshing Langkawi Honeymoon Package </h5>
                <ul>
                  <li>
                    A relaxing honeymoon to some scenic and tranquil place is a
                    must after the tiring wedding rituals and also to create
                    some magical moments with the partner. A honeymoon is the
                    most precious time of one’s life and it should be a special
                    one in every aspect so that it remains as a sweet memory in
                    your heart.
                  </li>

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
                        2 Flights
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotel
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Activities &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹17,000 <span>/Person</span>
                    </p>
                    <Link
                      to={"/MalaysiaTourPackagesPlan2"}
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
                <img src={p3} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Awesome Singapore and Malaysia Tour Package</h5>
                <ul>
                  <li>
                    Planning a trip with family or friends to Singapore? Book
                    our Singapore itinerary for 6 days to indulge in a variety
                    of experiences and explore attractions in Malaysia.
                  </li>

                  <b>6 Days & 5 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Flights
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotel
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 Activities &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹35,998 <span>/Person</span>
                    </p>
                    <Link
                      to={"/MalaysiaTourPackagesPlan3"}
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
                <img src={p4} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>
                  Singapore-Malaysia Holiday Packages For A Perfectly
                  Unforgettable Trip
                </h5>
                <ul>
                  <li>
                    Planning an exotic holiday this holiday season? What better
                    way to spend your vacation than Singapore and Malaysia. An
                    outstanding vacation awaits you as you book this 6 nights, 7
                    days Singapore and Malaysia tour package.{" "}
                  </li>

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
                        3 Flights
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        3 Hotel
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        6 Activities &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        4 Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹33,999 <span>/Person</span>
                    </p>
                    <Link
                      to={"/MalaysiaTourPackagesPlan4"}
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
                <img src={p5} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Idyllic Malaysia Tour Package</h5>
                <ul>
                  <li>
                    Explore the best of Malaysia with this 4 nights, 5 days
                    Malaysia tour package. Your Malaysia holiday comes coupled
                    with various features that takes your holiday delight to an
                    all new level.
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
                        2 Flights
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotel
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Activities &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹26,000 <span>/Person</span>
                    </p>
                    <Link
                      to={"/MalaysiaTourPackagesPlan5"}
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

export default MalaysiaTourPackages;
