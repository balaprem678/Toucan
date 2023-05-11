import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

// images

import thailand_honeymoon_package from "../../img/Thailand-honeymoon/thailand-honeymoon-package.avif";
import india_to_thailand_honeymoon_package from "../../img/Thailand-honeymoon/india-to-thailand-honeymoon-package.avif";
import bd083604c8f49346a367e7da35615525 from "../../img/Thailand-honeymoon/bd083604c8f49346a367e7da35615525.avif";
import bangkok from "../../img/Thailand-honeymoon/bangkok.avif";
import thailand_honeymoon_tour_package from "../../img/Thailand-honeymoon/thailand-honeymoon-tour-package.avif";
import krabi from "../../img/Thailand-honeymoon/krabi.avif";

import Navigation from "../Navigation";
import Footer from "../Footer";

function ThailandHoneyMoon() {
  return (
    <div className="ThailandHoneyMoon">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">ThailandHoneyMoon Vacation Packages</h4>
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
          <h1 className="head-content">Thailand Honeymoon Packages</h1>
          <p className="head-para-content">
            A Thailand Honeymoon has always been the ultimate getaway
            destination for newly-weds and the reasons are one too many.
            Bangkok, the capital of this Southeast Asian country, is a rare mix
            of islands, beaches, nightlife, wilderness, exquisite cuisine and
            monasteries. Famous for both fun and culture, there is something for
            every couple in Thailand. With a{" "}
            <strong className="ihp">Thailand honeymoon package</strong> discover
            the art, beauty, culture, and nightlife of this amazing island
            nation and make a memorable Thailand honeymoon. Pickyourtrail also
            offers{" "}
            <strong className="ihp">International Honeymoon Packages</strong>{" "}
            for other destinations.
          </p>
        </div>
      </div>
      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <img src={thailand_honeymoon_package} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Adventurous Thailand Honeymoon Package</h5>
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
                        5 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starts From</strong>
                    </h6>
                    <p>
                      ₹40,300 <span>/Person</span>
                    </p>
                    <button className="view-deal">View Deal</button>
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
                <img src={india_to_thailand_honeymoon_package} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>India to Thailand Honeymoon Package</h5>
                <ul>
                  <li>
                    Reconnecting with nature at Bangkok Safari World & Marine
                    Park Tour amidst wild and exotic animals
                  </li>
                  <li>
                    Shop at a lower cost at the native works at Damnoen Saduak
                    Floating Market
                  </li>
                  <li>Marine Park with Transfers</li>
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
                        4 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starts From</strong>
                    </h6>
                    <p>
                      ₹43,928 <span>/Person</span>
                    </p>
                    <button className="view-deal">View Deal</button>
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
                <img src={bangkok} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Magical Thailand Honeymoon Package With Flight</h5>
                <ul>
                  <li>
                    Reconnecting with nature at Bangkok Safari World & Marine
                    Park Tour amidst wild and exotic animals
                  </li>

                  <li>
                    <span>Phuket Trick Eye Museum</span>
                  </li>
                  <li>
                    Half Day Phuket City Tour with Big Buddha & Chalong Temple
                  </li>
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
                        5 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starts From</strong>
                    </h6>
                    <p>
                      ₹67,760 <span>/Person</span>
                    </p>
                    <button className="view-deal">View Deal</button>
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
                <img src={bd083604c8f49346a367e7da35615525} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Picturesque Thailand Honeymoon Holiday Packages</h5>
                <ul>
                  <li>
                    Krabi-4-island tour by speed boat with Lunch-(Excluding
                    Island Fee) by Song Taew (Shared Transfer)
                  </li>
                  <li>
                    Samui-Angthong National Marine Park By Big Boat with
                    Snorkeling + Kayaking (Excluding Island Fee) (Shared
                    Transfer)
                  </li>
                  <li>
                    Phuket-Candle light dinner at Monkey Dome (Private Transfer)
                  </li>
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
                        6 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starts From</strong>
                    </h6>
                    <p>
                      ₹84,462 <span>/Person</span>
                    </p>
                    <button className="view-deal">View Deal</button>
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
                <img src={thailand_honeymoon_tour_package} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Spectacular Thailand Honeymoon Tour Package</h5>
                <ul>
                  <li>Tiger Kingdom Phuket- Medium Tiger</li>
                  <li>
                    Phi Phi island tour by Speedboat to marvel at colourful
                    marine life and exotic coral reefs
                  </li>
                  <li>Alcazar Show (Standard) + (Join Transfer)</li>
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
                        5 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined wrong">
                          dangerous
                        </span>
                        Flights
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starts From</strong>
                    </h6>
                    <p>
                      ₹33,569 <span>/Person</span>
                    </p>
                    <button className="view-deal">View Deal</button>
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
                <img src={krabi} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Marvellous Thailand Package for Couple</h5>
                <ul>
                  <li>
                    Single delight -04 island with lunch by speedboat exclude
                    island fee
                  </li>
                  <li>
                    Beautiful and relaxing sunset cruise in Catamaran over
                    Andaman Sea
                  </li>
                  <li>Fun filled timeout at Phuket FantaSea show </li>
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
                        5 activities
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Transfers
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Flights
                      </span>
                      <br />
                      <span>
                        <span class="material-symbols-outlined tick">
                          check_circle
                        </span>
                        Visa fees
                      </span>
                    </ul>
                  </div>
                  <div className="rate-deal">
                    <h6>
                      <strong>Starts From</strong>
                    </h6>
                    <p>
                      ₹71,872 <span>/Person</span>
                    </p>
                    <button className="view-deal">View Deal</button>
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

export default ThailandHoneyMoon;
