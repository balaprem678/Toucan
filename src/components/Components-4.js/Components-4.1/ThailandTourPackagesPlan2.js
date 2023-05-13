import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p2 from "../../../img/Thailand/3/p2.jpg";
import p3 from "../../../img/Thailand/3/p3.jpg";
import p4 from "../../../img/Thailand/3/p4.jpg";
import p5 from "../../../img/Thailand/3/p2.jpg";

export default function ThailandTourPackagesPlan2() {
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
      details: "TRANSFER FROM BANGKOK TO PATTAYA & ALCAZAR SHOW",
      client_name:
        " Welcome to Thailand, one of Asia’s most Visited cities, full of culture and history. Upon arrival, driver meets you at the airport and take you to the hotel in Pattaya. This will be a smooth ride in the private van for 2 hours.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p2,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 1",
    },
    {
      details: "HAVE FUN AT THE CORAL ISLANDS.",
      client_name:
        " Start your first morning in Pattaya with a refreshing fill of healthy breakfast at your hotel. We will then take you to the speed boat point which will take you to the beautiful Koh Lann also known as Coral Island. Formed from coral detritus and organic material, the island is not only a beautiful sight to behold but also offers a number of fun sports and activities to indulge in.",
      image: p3,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    {
      details: "TRANSFER PATTAYA HOTEL TO BANGKOK & CHAO PHRAYA CRUISE DINNER",
      client_name:
        "After Breakfast, Get Pickup for Bangkok City from Hotel Lobby. Take rest for few hours in your hotel. Driver will pick up from your hotel at 18:30 in the evening. Hop onto this luxurious vessel and drift along the calm waters of the Chao Phraya River. See the city’s famous landmarks such as Wat Arun, Wat Pho, The Grand Palace, and more, as you bask in the evening’s cool breeze.",
      image: p4,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "LEISURE DAY IN BANGKOK – ENJOY SHOPPING (B)",
      client_name:
        "Have a fill at morning breakfast and set out to explore the wonderful city at your own. Visit to Bangkok remains incomplete if you don’t shop! Explore the markets and grab great deals at the local markets or world-class malls for absolutely everything you buy right from trendy clothes and accessories to designer goods and electronic gadgets.",
      image: p5,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
  ]);

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
      <div className="Thailand-content margin">
        <div className="container">
          <h1 className="head-content">Thailand Tour Packages Plan</h1>
          <p className="head-para-content">
            Planning to visit Dubai with your partner anytime soon? Choose Dubai
            Honeymoon Packages to explore Dubai and have the best travel
            experiences ever. This glamorous city has huge buildings,
            jaw-dropping architectural marvels, plenty of adventure parks,
            wonderful views from the desert, gigantic shopping malls and of
            course, royal vibes! It is an amazing blend of rich culture and
            modern technology which must be explored on a honeymoon trip to
            Dubai. You just cannot miss the fantastic marina dinner cruise,
            intimidating hot air balloon ride, views of Dubai Fountain and a lot
            more. So, don’t wait, surprise your other half with an unforgettable
            Dubai trip and cherish the moments forever!
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
