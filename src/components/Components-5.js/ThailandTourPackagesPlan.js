import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

// images
import p1 from "../../img/1/1.avif";
import p2 from "../../img/1/2.jpg";
import p3 from "../../img/1/3.webp";
import p4 from "../../img/1/4.avif";
import p5 from "../../img/1/5.jpg";
import taxi from "../../img/Family Package/himachal/taxi.gif";
import sleep from "../../img/Family Package/himachal/sleep.gif";
import food from "../../img/Family Package/himachal/vegan-food.gif";

import Navigation from "../Navigation";
import Footer from "../Footer";

function ThailandTourPackagesPlan() {
  return (
    <div className="ThailandTourPackagesPlan">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Thailand Tour Packages Plan</h4>
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

      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p1} alt="" className="left-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Holiday Style Ao Nang Resort Krabi</h5>
                <ul>
                  <li>
                    Located in Ao Nang Beach, a 6-minute walk from Ao Nang Krabi
                    Boxing Stadium, Holiday Style Ao Nang Resort Krabi.
                    (Formerly: Holiday Inn Express Krabi Ao Nang) provides
                    air-conditioned rooms with free WiFi. Featuring an outdoor
                    swimming pool, this property is set a short distance from
                    Krua Thara Seafood Restaurant, Aonang Mosque and Island
                    Hopping Tour Desk, Nopparat Thara Beach. The accommodation
                    features a 24-hour front desk.
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
                    <span>
                      <img src={taxi} alt="" />
                    </span>
                    <span>
                      <img src={sleep} alt="" />
                    </span>
                    <span>
                      <img src={food} alt="" />
                    </span>

                    <button className="view-deal">Day - 1</button>
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
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Ferry Transfer from Ao Nang Krabi </h5>
                <ul>
                  <li>
                    One-Way Shared Transfer from hotel in Krabi (AoNang area
                    only) to Nopparat Thara Pier
                  </li>
                  <li>One-way shared ferry from Krabi to Phuket</li>
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
                    <span>
                      <img src={taxi} alt="" />
                    </span>
                    <span>
                      <img src={sleep} alt="" />
                    </span>
                    <span>
                      <img src={food} alt="" />
                    </span>

                    <button className="view-deal">Day - 2</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p2} alt="" />
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
                <img src={p3} alt="" className="left-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Peach Hill Hotel & Resort - Holidays Selections</h5>
                <ul>
                  <li>
                    Imp Note: Peach Blossom Resort to having essential
                    maintenance of main swimming pool; will be temporary close
                    from 05 to 31 May'23, will be open back to service on 01
                    Jun'23. However guest who would like to use the swimming
                    pool during that period are able to use at Chabu or Mangko
                    swimming pool.
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
                    <span>
                      <img src={taxi} alt="" />
                    </span>
                    <span>
                      <img src={sleep} alt="" />
                    </span>
                    <span>
                      <img src={food} alt="" />
                    </span>

                    <button className="view-deal">Day - 3</button>
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
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Tour Manager Assistance</h5>
                <ul>
                  <li>Tour Manager Assistance</li>
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
                    <span>
                      <img src={taxi} alt="" />
                    </span>
                    <span>
                      <img src={sleep} alt="" />
                    </span>
                    <span>
                      <img src={food} alt="" />
                    </span>

                    <button className="view-deal">Day - 4</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p4} alt="" />
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
                <img src={p5} alt="" className="left-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>
                  Phi Phi Island Tour with Lunch by Big Boat - Standard Class
                  (SIC)
                </h5>
                <ul>
                  <li>
                    Join transfer Phuket hotel (Patong, Kata and Karon areas
                    only) to pier and back
                  </li>
                  <li>Round trip ferry</li>
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
                    <span>
                      <img src={taxi} alt="" />
                    </span>
                    <span>
                      <img src={sleep} alt="" />
                    </span>
                    <span>
                      <img src={food} alt="" />
                    </span>

                    <button className="view-deal">Day - 5</button>
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

export default ThailandTourPackagesPlan;
