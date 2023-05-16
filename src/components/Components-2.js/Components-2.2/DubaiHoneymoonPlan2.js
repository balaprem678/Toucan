import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p6 from "../../../img/Dubai honeymoon packages plan/1/p6.webp";
import p7 from "../../../img/Dubai honeymoon packages plan/1/p7.webp";
import p8 from "../../../img/Dubai honeymoon packages plan/1/p8.webp";
import p9 from "../../../img/Dubai honeymoon packages plan/1/p9.webp";
import p10 from "../../../img/Dubai honeymoon packages plan/1/p10.webp";
import p11 from "../../../img/Dubai honeymoon packages plan/1/p11.webp";

export default function DubaiHoneymoonPlan2() {
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
      details: "Dubai:Arrival & Dhow Cruise ",
      client_name:
        "Cruise through this dazzling land filled with cultural delights and mouthwatering Arabian delicacies.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p6,
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
      details: "Dubai: Desert Safari Tour",
      client_name:
        "After a delectable early breakfast, head out for a desert safari tour among the rolling sand dunes of Dubai.  Ride on a camel, try out a henna design and go sand boarding and quad biking at an added cost on this honeymoon package. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p7,
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
      details: "Dubai: City Tour",
      client_name: "Get a fresh start to the day with a delicious breakfast and then proceed for a city tour with your partner. Snap pictures of the Burj Al Arab, learn about Dubai’s history at the Dubai Museum and enjoy views of the white marble dome and minarets of the Jumeirah Mosque. ",
      image: p8,
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
      details: "Dubai: Abu Dhabi city tour & Ferrari World",
      client_name:
        "Fill yourself up with a delectable breakfast and then set out on a city tour of UAE’s capital Abu Dhabi. Marvel at the beauty of two of UAE’s most spectacular buildings: the Emirates Palace and Sheik Zayed Mosque on this Dubai honeymoon tour. ",
      image: p9,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    // 5
    {
      details: "Dubai: Dolphinarium tour",
      client_name:
        "Savor a flavorsome breakfast with your beloved on this honeymoon tour of Dubai and then proceed to the Dubai Dolphinarium. Interact with dolphins underwater and enjoy fun poolside activities on this action-packed tour.",
      image: p10,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    // 6
    {
      details: "Dubai: Stay at Atlantis, The Palm",
      client_name:
        "Post a yummy breakfast, check-out from the hotel and get transferred toAtlantis, The Palm. After you have rested for a while, enjoy thrilling water rides and spend time with some marine creatures at Aquaventure Waterpark and The Lost Chambers where you will have unlimited access.",
      image: p11,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 6",
    },
    // 7
    {
      details: "Dubai: Departure",
      client_name:
        "Devour a tasty breakfast and then complete all your formalities from the Atlantis Palm. You will then be transferred to the airport and can then board a flight back home.",
      image: p11,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 6",
    },

  ]);

  return (
    <div className="KashmirTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">Dubai HoneyMoon Packages Plan</h4>
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
          <h1 className="head-content">Dubai HoneyMoon Packages Plan</h1>
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
