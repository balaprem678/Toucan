import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

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
                <h5>Fully Loaded Escape to Kuala Lumpur</h5>
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
                  <b>4 nights: 5 days </b>
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
                      ₹53,192 <span>/Person</span>
                    </p>
                    <button className="view-deal">View All Plan</button>
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
                <h5>Wonderful Escape to Kuala Lumpur</h5>
                <ul>
                  <li>
                    Discover the beauty of Singapore on this exciting trip!
                    Experience a cruise tour with lavish amenities and fantastic
                    food. Head to Kuala Lumpur and visit the mesmerising
                    Petronas Towers.{" "}
                  </li>

                  <b>5 nights: 6 days </b>
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
                      ₹70,382 <span>/Person</span>
                    </p>
                    <button className="view-deal">View All Plan</button>
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
                <h5>4Nights Fun Kuala Lumpur Getaway</h5>
                <ul>
                  <li>An getaway to Kuala Lumpur</li>

                  <b>4 nights: 5 days </b>
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
                      ₹70,382 <span>/Person</span>
                    </p>
                    <button className="view-deal">View All Plan</button>
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
                <h5>Malaysia Fully Loaded</h5>
                <ul>
                  <li>An getaway to Kuala Lumpur</li>

                  <b>8 nights: 9 days </b>
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
                      ₹91,018 <span>/Person</span>
                    </p>
                    <button className="view-deal">View All Plan</button>
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
                <h5>Fun Filled Kuala Lumpur Vacation</h5>
                <ul>
                  <li>Explore the wonders of Kuala Lumpur</li>

                  <b>3 nights: 4 days </b>
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
                      ₹91,018 <span>/Person</span>
                    </p>
                    <button className="view-deal">View All Plan</button>
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
