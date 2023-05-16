import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import { Link } from "react-router-dom";

// images

import dubai from "../../img/dubai-honey-moon/dubai.avif";
import BlueWaters_Final from "../../img/dubai-honey-moon/BlueWaters_Final.avif";
import dubai_2 from "../../img/dubai-honey-moon/dubai-2.avif";
import dubai_1 from "../../img/dubai-honey-moon/dubai-1.avif";

import Navigation from "../Navigation";
import Footer from "../Footer";

function MalaysiaHoneyMoon() {
  return (
    <div className="MalaysiaHoneyMoon">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Malaysia HoneyMoon Vacation Packages</h4>
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
          <h1 className="head-content">Malaysia HoneyMoon Vacation Packages</h1>
          <p className="head-para-content">
            Planning to visit Malaysia HoneyMoon Vacation Packages with your
            partner anytime soon? Choose MalaysiaHoneyMoon Vacation Packages
            Honeymoon Packages to explore MalaysiaHoneyMoon Vacation Packages
            and have the best travel experiences ever. This glamorous city has
            huge buildings, jaw-dropping architectural marvels, plenty of
            adventure parks, wonderful views from the desert, gigantic shopping
            malls and of course, royal vibes! It is an amazing blend of rich
            culture and modern technology which must be explored on a honeymoon
            trip to MalaysiaHoneyMoon Vacation Packages. You just cannot miss
            the fantastic marina dinner cruise, intimidating hot air balloon
            ride, views of MalaysiaHoneyMoon Vacation Packages Fountain and a
            lot more. So, don’t wait, surprise your other half with an
            unforgettable MalaysiaHoneyMoon Vacation Packages trip and cherish
            the moments forever!
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
                <h5>Exhilarating Malaysia Tour Package</h5>
                <ul>
                  <li>
                    Malaysia, every traveler’s go-to destination, is the
                    culmination of everything one would every hope to find to
                    make it a traveler’s paradise. It has a huge tourist influx,
                    as it appeals to all kinds of travelers: the adventure
                    lover, the explorer, the peace-seeker, the wildlife
                    enthusiast and the one craving a getaway from the monotonous
                    life of the metropolitan.
                  </li>

                  <b>75 Days & 4 Nights </b>
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
                      ₹31,998 <span>/Person</span>
                    </p>
                    <Link to={"/MalaysiaHoneymoonPlan1"} className="nav-link">
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
                <img src={BlueWaters_Final} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Picturesque Malaysia Honeymoon Package</h5>
                <ul>
                  <li>
                    Malaysia, an idyllic destination to kickstart your married
                    life, offers everything you would ever hope to find to make
                    your honeymoon perfect. It is a melange of different and
                    varied traditions and cultures, standing up to the title of
                    “Truly Asia”, providing an experience incomparable to any
                    other. It is an impeccable destination for a honeymoon as
                    it’s a perfect blend of beauty, serenity, traditionality,
                    entertainment, modernity and tranquility.
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
                    <Link to={"/MalaysiaHoneymoonPlan2"} className="nav-link">
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
                <img src={dubai_2} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>Captivating Malaysia Honeymoon Package From Hyderabad</h5>
                <ul>
                  <li>A romantic excursion to Batu Caves</li>
                  <li>
                    Enjoy Genting Skyway cable car ride for panoramic views
                  </li>
                  <li>Adventure rides at Sunway Lagoon Theme Park</li>
                  <b>5 Days & 4 Nights </b>
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
                    <Link to={"/MalaysiaHoneymoonPlan3"} className="nav-link">
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
                <img src={dubai_1} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 content-section">
                <h5>The beginning of a union with a trot around Malaysia</h5>
                <ul>
                  <li>
                    They say that the best things in life come in pairs. Now
                    that the two of you are a pair of your own, maybe your
                    honeymoon should reflect that, wouldn’t you say? Our
                    Singapore-Malaysia honeymoon itinerary for 6 days will help
                    you do just that. Malaysia and Singapore are known for being
                    modern, well-developed nations that can provide for each one
                    of your necessities. So rest assured that your honeymoon
                    here will be spent comfortably.
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
                    <Link to={"/MalaysiaHoneymoonPlan4"} className="nav-link">
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

export default MalaysiaHoneyMoon;
