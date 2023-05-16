import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p5 from "../../../img/malaysiahoneymoon/p5.webp";
import p6 from "../../../img/malaysiahoneymoon/p6.webp";
import p7 from "../../../img/malaysiahoneymoon/p7.webp";
import p8 from "../../../img/malaysiahoneymoon/p8.webp";

export default function MalaysiaHoneymoonPlan2() {
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
    // 1
    {
      details: "Arrival at Malaysia",
      client_name:
        "Transfer to your pre-booked hotel in Kuala Lumpur after your arrival at the Malaysia Airport. Check-in at the hotel on arrival and spend the rest of the day at the leisure spending quality time with your significant other in the lap of nature’s beauty. You could also explore nearby places. Overnight stay at the hotel.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p5,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 1",
    },
    // 2
    {
      details: "Genting Highlands Visit",
      client_name:
        "Check-out of the hotel after breakfast and travel to Gentings check-in to your pre-booked hotel and embark on an all-day excursion to the Genting Highlands. Spend the day indulging in activities offered like trekking, stargazing, cable-car ride or rejuvenating at the hill-station. Overnight stay at the hotel. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p6,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    // 3
    {
      details: "Transfer to Kuala Lumpur",
      client_name:
        "After a hearty meal at the hotel, travel to Kuala Lumpur and check-in at the pre-booked hotel on arrival. After unwinding from the exhaustion of the travel, embark on a city tour in the evening exploring Kuala Lumpur in all its charm. Return to the hotel and stay overnight.",
      image: p7,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    // 4
    {
      details: "Depart for your homeland",
      client_name:
        "After a satisfactory meal at the hotel, transfer to the Malaysia Airport. Gather your memories and depart for your homeland, bringing your idyllic honeymoon to an end.",
      image: p8,
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
    <div className="KashmirTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">Malaysia HoneyMoon Packages Plan</h4>
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
          <h1 className="head-content">Malaysia HoneyMoon Packages Plan</h1>
          <p className="head-para-content">
            Planning to visit Malaysia with your partner anytime soon? Choose Malaysia
            Honeymoon Packages to explore Malaysia and have the best travel
            experiences ever. This glamorous city has huge buildings,
            jaw-dropping architectural marvels, plenty of adventure parks,
            wonderful views from the desert, gigantic shopping malls and of
            course, royal vibes! It is an amazing blend of rich culture and
            modern technology which must be explored on a honeymoon trip to
            Malaysia. You just cannot miss the fantastic marina dinner cruise,
            intimidating hot air balloon ride, views of Malaysia Fountain and a lot
            more. So, don’t wait, surprise your other half with an unforgettable
            Malaysia trip and cherish the moments forever!
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
