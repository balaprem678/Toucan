import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

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
                <h5>Dubai - The Best of Dubai </h5>
                <ul>
                  <li>
                    Treat yourself to refreshing spas and extravagant resorts in
                    Dubai! Beat the heat with unbelievable discounts on
                    bookings.
                  </li>

                  <b>4 nights: 5 Days</b>
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
                      ₹52,551 <span>/Person</span>
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
                <h5>Explore Dubai with your Soulmate </h5>
                <ul>
                  <li>
                    Luxury, relaxation and fun, are what your Dubai vacation
                    will be all about. Soak in the attractions like Yas Island,
                    safaris and more with your loved ones.
                  </li>

                  <b>3 nights: 4 Days</b>
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
                      ₹41,509 <span>/Person</span>
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
                <h5>Feel the Magic of Love in Dubai! </h5>
                <ul>
                  <li>
                    Luxury, relaxation and fun, are what your Dubai vacation
                    will be all about. Soak in the attractions like Yas Island,
                    safaris and more with your loved ones.
                  </li>

                  <b>5 nights: 6 Days</b>
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
                      ₹52,551 <span>/Person</span>
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
                <h5>Feel the Magic of Love in Dubai! </h5>
                <ul>
                  <li>
                    Luxury, relaxation and fun, are what your Dubai vacation
                    will be all about. Soak in the attractions like Yas Island,
                    safaris and more with your loved ones.
                  </li>

                  <b>3 nights: 4 Days</b>
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
                      ₹41,509 <span>/Person</span>
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

export default DubaiTourPackages;
