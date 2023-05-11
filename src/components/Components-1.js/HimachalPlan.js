import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

// images
import p1631875142 from "../../img/Family Package/himachal/1631875142.jpg";
import p1631875754 from "../../img/Family Package/himachal/1631875754.jpg";
import p1631875964 from "../../img/Family Package/himachal/1631875964.jpg";
import p1631876160 from "../../img/Family Package/himachal/1631876160.jpg";
import p1631876373 from "../../img/Family Package/himachal/1631876373.jpg";
import p1631876446 from "../../img/Family Package/himachal/1631876446.jpg";
import p1631876542 from "../../img/Family Package/himachal/1631876542.jpg";
import taxi from "../../img/Family Package/himachal/taxi.gif";
import sleep from "../../img/Family Package/himachal/sleep.gif";
import food from "../../img/Family Package/himachal/vegan-food.gif";

import Navigation from "../Navigation";
import Footer from "../Footer";

function HimachalPlan() {
  return (
    <div className="HimachalPlan">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Himachal Plan Vacation Packages</h4>
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
                <img src={p1631875142} alt="" className="left-img"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Chandigarh airport to Manali</h5>
                <ul>
                  <li>Pick up from Chandigarh Airport</li>
                  <li>Railway station and transfer to Manali.</li>
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
                <h5>Manali - Buddhist Monastry</h5>
                <ul>
                  <li>
                    Full day tour of Manali including visit to Buddhist
                    Monastry, Hadimba Devi Temple, Vashishth Temple, Club House,
                    Naggar Castle etc. Evening free to visit Mall Road.
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

                    <button className="view-deal">Day - 2</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p1631875754} alt="" />
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
                <img src={p1631875964} alt="" className="left-img"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Excursion to Solang Valley</h5>
                <ul>
                  <li>Full day excursion to Solang Valley. Enjoy adventure activities, horse riding, ropeway in Solang Valley, Yak riding, Paragliding and Zorbing at your own expense.</li>
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
                <h5>Manali to Dharamshala</h5>
                <ul>
                  <li>
                  Transfer from Manali to Dharamshala. Enroute visit to Kullu, Pandoh Dam, Vaidyanath Shiva Temple, baijnath etc.
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

                    <button className="view-deal">Day - 4</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p1631876160} alt="" />
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
                <img src={p1631876373} alt="" className="left-img"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Dharamshala local sightseeings</h5>
                <ul>
                  <li>Dharamshala Local (Mcleodganj, Dal lake, Bhagsu Nag Temple, Dalai Lama Temple-Dalhousie). Overnight in Dalhousie.</li>
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

      <div className="tour-packages">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Khajjiar</h5>
                <ul>
                  <li>
                  Full day trip to Khajjiar.
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

                    <button className="view-deal">Day - 6</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p1631876446} alt="" />
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
                <img src={p1631876542} alt="" className="left-img"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>Departure</h5>
                <ul>
                  <li>Departure transfer from Dalhousie to Chandigarh.</li>
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

                    <button className="view-deal">Day - 7</button>
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

export default HimachalPlan;
