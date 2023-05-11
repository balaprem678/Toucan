import "../../App.css";
import "../../css/Comman.css";
import "../../css/HoneyMoon.css";

import React from "react";

// images
import p1631177365 from "../../img/Family Package/Shillong/1631177365.jpg";
import p1631177394 from "../../img/Family Package/Shillong/1631177394.jpg";
import p1631177421 from "../../img/Family Package/Shillong/1631177421.jpg";
import p1631177477 from "../../img/Family Package/Shillong/1631177477.jpg";
import p1631177508 from "../../img/Family Package/Shillong/1631177508.jpg";
import p1631177530 from "../../img/Family Package/Shillong/1631177530.jpg";

import taxi from "../../img/Family Package/himachal/taxi.gif";
import sleep from "../../img/Family Package/himachal/sleep.gif";
import food from "../../img/Family Package/himachal/vegan-food.gif";

import Navigation from "../Navigation";
import Footer from "../Footer";

function ShillongPlan() {
  return (
    <div className="ShillongPlan">
      <Navigation />
      <div className="thailand-home">
        <h4 className="head-2">Shillong Plan Vacation Packages</h4>
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

      <div className="tour-packages" id="ShillongPlan">
        <div className="container ">
          <div className="tour-package-card margins">
            <div className="row">
              <div className="col-lg-6 col-md-3 col-sm-12">
                <img src={p1631177365} alt="" className="left-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>GUWAHATI AIRPORT – SHILLONG</h5>
                <ul>
                  <li>
                    Arrive at Guwahati airport and drive to Shillong (140 kms /
                    4 hrs drive approx). En route witness the Umiam Lake or
                    Barapani - is the biggest artificial lake in Meghalaya in
                    the midst of sylvan hills adorned by Khasi pines & peerless
                    beauty.
                  </li>
                  <li>
                    Check-in Hotel and after refreshment if time permits visit
                    Cathedral of Mary and Ward's Lake. Evening free at leisure
                    to explore the region on my own. You may take a walk to the
                    famous Police Bazaar for shopping. Overnight in Shillong.
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
                <h5>SHILLONG – CHERRAPUNJEE</h5>
                <ul>
                  <li>
                    After breakfast drive to Cherrapunjee, the wettest place on
                    the earth, via Double Decker Living Root Bridge. At Sohra,
                    stop at the Duwan Sing Syiem view point for mesmerizing
                    views of the Hills.
                  </li>
                  <li>
                    In Cherrapunjee be witness to the gorgeous Seven Sisters
                    Falls and Nohkalikai Falls. Later take a soft cave walk
                    inside the Mawsmai Cave. The limestone cave is a natural
                    wonder with innumerable formations inside it.
                  </li>
                  <li>Overnight stay at Cherapunjee.</li>
                  <li>
                    Note: Most of the waterfalls are dry during the winter
                    season.
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
                <img src={p1631177394} alt="" />
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
                <img src={p1631177421} alt="" className="left-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>MAWLYNNONG - DAWKI – SHILLONG</h5>
                <ul>
                  <li>
                    After breakfast, drive to Mawlynnong, the cleanest village
                    in Asia (100 kms / 3 hrs drive approx), also known as 'God's
                    own Garden'. With over 80 households, the village gives the
                    ambiance of walking in a well maintained park ! Climb the 80
                    ft Sky Walk at Mawlynnong village for a bird's eye view of
                    the Village, the plantations and faraway plains of
                    Bangladesh. You will also be acquainted with the Khasi
                    lifestyle, their culture and economy.
                  </li>
                  <li>
                    A trek to the nearby Rewai Village is another interesting
                    activity. Walk down a flight of almost 100 steps to witness
                    nature's wonder, living-root bridge. The bridges are tangles
                    of massive thick roots, which the local people intertwine to
                    form a bridge that can hold several people at a time. The
                    root bridges may be up to over a hundred feet long and take
                    ten to fifteen years to become fully functional, but they
                    become very strong in the process. The bridges live and keep
                    growing and strengthening over time. The useful lifespan of
                    the bridges is thought to be 500-600 years.
                  </li>
                  <li>
                    Later drive to Dawki, a village of the Jaintia community
                    whose prime occupation was fishing. Be mesmerized by the
                    beauty of the Umngot river, the venue of the annual boat
                    race held during March - April at Umsyiem. The Umngot itself
                    is a prime fishing spot for fishermen of the villages. The
                    river is also famous for its crystal clear water, so clear
                    that when seen from a distance, it appears as if the boat is
                    floating in mid-air! The Umngot river is the natural
                    boundary between Ri Pnar or Jaintia Hills with Hima Khyrim
                    of Khasi hills over which a single span suspension bridge
                    was constructed. This is the gateway to Bangladesh where
                    major export and import transactions take place. Enjoy an
                    amazing country boat river ride (at additional cost). Drive
                    up to the Bangladesh border. Later proceed to Shillong for
                    overnight stay.
                  </li>
                  <li>
                    Note: It is advisable to carry packed lunch to Mwallynong.
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
                <h5>SHILLONG – GUWAHATI</h5>
                <ul>
                  <li>
                    Morning after breakfast proceed for the Shillong tour
                    covering Wards Lake, Don Bosco Museum, Golf Course,
                    Cathedral Church. Later after lunch, drive to Guwahati.
                  </li>
                  <li>
                    Arrive to check in to the hotel. Overnight stay at Guwahati.
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
                <img src={p1631177477} alt="" />
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
                <img src={p1631177508} alt="" className="left-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 content-section">
                <h5>GUWAHATI</h5>
                <ul>
                  <li>
                    After breakfast take a tour in Guwahati city covering Maa
                    Kamakhya temple, Navagraha temple (temple of nine planets),
                    Umananda temple (a 17th century Shiva temple situated on the
                    Peacock island in the middle of the Brahmaputra river),
                    Balaji Temple (a white marvelous structure temple devoted to
                    Lord Balaji), Assam State Zoo Cum Botanical garden.
                  </li>
                  <li>
                    Evening enjoy a River cruise over the river Brahmaputra
                    (cruise charges additional). Overnight in Guwahati.
                  </li>
                  <li>
                    NOTE: River cruise depends on availability, water level and
                    river condition.
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
                <h5>DEPARTURE</h5>
                <ul>
                  <li>After Breakfast drive to Guwahati Airport /Station.</li>
                  <li>TOUR ENDS HERE WITH SWEET MEMORIES</li>
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
                <img src={p1631177530} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShillongPlan;
