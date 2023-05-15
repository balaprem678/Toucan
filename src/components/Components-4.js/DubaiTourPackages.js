import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

import { Link } from "react-router-dom";

// images
import p1 from "../../img/Duabi/p1.webp";
import p2 from "../../img/Duabi/p2.webp";
import p3 from "../../img/Duabi/p3.avif";
import p4 from "../../img/Duabi/p4.avif";
import p5 from "../../img/Duabi/p5.webp";

import Navigation from "../Navigation";
import Footer from "../Footer";

function DubaiTourPackages() {
  return (
    <div className="DubaiTourPackages">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Dubai Vacation Packages</h4>
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
          <h1 className="head-content">Dubai Tour Packages</h1>
          <p className="head-para-content">
            How can you perfect a Dubai honeymoon trip? Be it watching the
            sunset at Changi Point Coastal walk, dining at soaring heights of
            Jewel Box, taking the cable car ride at Mount Faber Peak with your
            partner or relishing in the luxury of Marina Bay Sands, a perfect
            Dubai honeymoon package can certainly adds up to couples
            post-marital bliss. Be it taking a leisure walk in the lush greenery
            of the Botanical Gardens, unwinding at the beaches of Sentosa,
            indulging in luxury shopping at Orchard’s Road, or sipping luscious
            coffee in the mural arts streets of Haji Lane, our Dubai package for
            couple incorporates the best places that the lion city has to offer.
            Be it absorbing panoramic views of the city from exhilarating
            heights at Dubai Flyer, watching the lights and laser show at Marina
            Bay Sands, basking in the tranquil at St. John’s Island, cruising
            away at Clarke Quay or taking a stroll down the Gardens of the bay
            for a view of the Supertree Grove, Dubai has a bit of everything to
            suit all kinds of honeymoon travellers. With Pickyourtrail’s Dubai
            honeymoon packages, make your customisable &nbsp;
            <strong> Dubai honeymoon packages</strong> special and make memories
            to cherish for a lifetime. Pickyourtrail also offers International
            Honeymoon Packages for other destinations!
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
                <h5>Dubai Luxurious Stays at Affordable Price </h5>
                <ul>
                  <li>
                    Enjoy with your loved one, delighting in the grandeur of
                    skyscrapers, beaches, amusement parks, cruises and
                    spectacular restaurants!
                  </li>

                  <b>5 nights: 6 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span>
                          <span class="material-symbols-outlined wrong">
                            dangerous
                          </span>
                          Flights
                        </span>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        Activities &nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹26,740 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiTourPackagesPlan1"} className="nav-link">
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
                <h5>Simply Dubai - Flight Inclusive</h5>
                <ul>
                  <li>Half day Dubai City Tour on Seat In Coach Basis</li>
                  <li>
                    01 Complementary Box of Dates per family during the stay
                  </li>
                  <li>Dubai Visa Charges Included</li>
                  <li>5% VAT Charges Included</li>
                  <li>
                    Covid Travel Insurance covering Hotel/Institutional
                    Quarantine stay expenses in case customer tests positive on
                    tour
                  </li>

                  <b>5 Nights: 6 Days</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span>
                          <span class="material-symbols-outlined tick">
                            check_circle
                          </span>
                          2 Flights
                        </span>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 Activities &nbsp;&nbsp;&nbsp;
                      </span>
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹65,125 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiTourPackagesPlan2"} className="nav-link">
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
                  Budget-Friendly Dubai Packages From Atlantis For A Thrilling
                  Vacay
                </h5>
                <ul>
                  <li>
                    It’s time to take that much-needed break with this
                    customizable 5 night 6 days Dubai package and jaunt away on
                    the most memorable journey of your life. Get pampered with
                    this mind-blowing exclusive Dubai itinerary for 6 days where
                    you shall embark on a guided tour of Dubai and get a chance
                    to cruise lavishly through the Dubai Creek.
                  </li>

                  <b>6 Days & 5 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span>
                          <span class="material-symbols-outlined tick">
                            check_circle
                          </span>
                          2 Flights
                        </span>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹45,500 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiTourPackagesPlan3"} className="nav-link">
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
                <h5>
                  Splendid Dubai Abu Dhabi Tour Packages For An Amazing Holiday
                </h5>
                <ul>
                  <li>
                    Planning a family vacation and do not know what to do? Start
                    with picking the destination. The middle east with its
                    modernity and ultra-growth looks like a good option when fun
                    for the whole family is to be ensured. Browse our Dubai 6
                    nights 7 days packages and see for yourself what a tour with
                    family to the prime city of middle east looks like.
                  </li>

                  <b>7 Days & 6 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span>
                          <span class="material-symbols-outlined tick">
                            check_circle
                          </span>
                          2 Flights
                        </span>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹24,999 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiTourPackagesPlan4"} className="nav-link">
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
                <h5>Feel the Magic of Love in Dubai! </h5>
                <ul>
                  <li>
                    This 5 days, 4 nights Dubai honeymoon package is the perfect
                    match for couples who fancy a romantic getaway that’s a
                    blend of serenity and adventure. As the duo will visit the
                    top tourist attractions of Dubai, their bond will get
                    stronger. One can avail Dubai honeymoon packages from Delhi,
                    Mumbai, Chennai, and other major Indian cities.
                  </li>

                  <b>5 Days & 4 Nights</b>
                </ul>
                <div className="include-activity">
                  <div>
                    <h6>INCLUSIONS (CUSTOMISABLE)</h6>
                    <ul>
                      <span>
                        <span>
                          <span class="material-symbols-outlined tick">
                            check_circle
                          </span>
                          2 Flights
                        </span>
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        1 Hotal
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        2 transfer
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starting From</strong>
                    </h6>
                    <p>
                      ₹27,000 <span>/Person</span>
                    </p>
                    <Link to={"/DubaiTourPackagesPlan5"} className="nav-link">
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

export default DubaiTourPackages;
