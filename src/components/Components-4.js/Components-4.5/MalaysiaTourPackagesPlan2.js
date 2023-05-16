import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p9 from "../../../img/malaysia/p9.webp";
import p10 from "../../../img/malaysia/p10.webp";
import p11 from "../../../img/malaysia/p11.webp";
import p12 from "../../../img/malaysia/p12.webp";

export default function MalaysiaTourPackagesPlan2() {
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState("");
  const [mediaList, setMediaList] = useState([
    {
      details: "Langkawi: Arrival & Leisure Day",
      client_name:
        "As you arrive at the airport in Langkawi, you will be greeted by our agent’s representative who will transfer you to your hotel. Check-in and relax to do away with flight fatigue. Rest of the day free for you to explore at leisure. Spend a comfortable evening at the resort or opt to go exploring. Go back to your hotel for a relaxing overnight stay.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p9,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 1",
    },
    {
      details: "Langkawi: Half-Day Island Tour",
      client_name:
        "Start your day with a delicious breakfast and then head out for a half-day island tour. Through this tour you will get to visit places of natural attractions, history & legends of Langkawi. It will take you to Batik and Art Village, Dataran Lang, or Eagle’s Square. Then, you will drive past the famous beach of Cenang passing by the only Underwater World in the north of Malaysia. The tour will end at Kuah Town. Later, return to the hotel for an overnight stay.",
      image: p10,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    {
      details: "Langkawi: Mangrove & Cave Exploring",
      client_name:
        "Wake up to a wholesome breakfast. Today, you will get to explore the widespread mangrove forest situated on the north-eastern coast of Langkawi. A boat trip amidst the forest makes for a very intriguing experience. You will go through several channels lined with mangrove trees. Then, you will move past a cave and then to a larger bay, where one can witness several large sailboats at anchor in the protected cove. The tour also includes a unique activity of the eagle feeding show. Later, get back to the hotel for an overnight stay.",
      image: p11,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Langkawi: Departure",
      client_name:
        "After an energizing breakfast at your hotel, check out and stroll in the streets and markets of Langkawi and don’t forget to shop for unique souvenirs available at cheap rates here. Get transferred to the airport afterward and board your flight back home.",
      image: p12,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
  ]);

  return (
    <div className="DubaiTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">Malaysia Tour Vacation Packages</h4>
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
          <h1 className="head-content">Malaysia Tour Vacation Packages</h1>
          <p className="head-para-content">
            Planning to visit Malaysia with your partner anytime soon? Choose
            Malaysia Tour Vacation Packages to explore Malaysia and have the
            best travel experiences ever. This glamorous city has huge
            buildings, jaw-dropping architectural marvels, plenty of adventure
            parks, wonderful views from the desert, gigantic shopping malls and
            of course, royal vibes! It is an amazing blend of rich culture and
            modern technology which must be explored on a honeymoon trip to
            Malaysia. You just cannot miss the fantastic marina dinner cruise,
            intimidating hot air balloon ride, views of Malaysia Fountain and a
            lot more. So, don’t wait, surprise your other half with an
            unforgettable Malaysia trip and cherish the moments forever!
          </p>
        </div>
      </div>

      {/* Tour-Packages */}
      <div className="tour-packages">
        <div className="container">
          <div className="tour-package-card">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="container">
                  {mediaList
                    .filter(
                      (item) =>
                        !selectedIndex || item.department === selectedIndex
                    )
                    .map((data, index) => {
                      return (
                        <div key={index} className="row media-page">
                          <div className="col-lg-4 col-md-8 col-sm-12 media-img">
                            <img src={data.image} className="left-img" />
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-12 media-img">
                            <div className="img1">
                              <div className="comment">
                                <h5>{data.details}</h5>
                                <ul>
                                  <li>{data.client_name}</li>
                                </ul>
                                <div className="include-activity">
                                  <div>
                                    <h6>{data.position}</h6>
                                    <ul>
                                      <span>
                                        <span>
                                          {" "}
                                          <span class="material-symbols-outlined tick">
                                            check_circle
                                          </span>
                                          {data.Food}
                                        </span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span>
                                          {" "}
                                          <span class="material-symbols-outlined tick">
                                            check_circle
                                          </span>
                                          {data.hotal}
                                        </span>
                                        <br />
                                        <span>
                                          {" "}
                                          <span class="material-symbols-outlined tick">
                                            check_circle
                                          </span>
                                          {data.Pickup}
                                        </span>
                                      </span>
                                    </ul>
                                  </div>
                                  <div className="rate-deal">
                                    <span>
                                      <img src={data.taxi} />
                                    </span>
                                    <span>
                                      <img src={data.sleep} />
                                    </span>
                                    <span>
                                      <img src={data.food} />
                                    </span>

                                    <button className="view-deal">
                                      {data.days}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
