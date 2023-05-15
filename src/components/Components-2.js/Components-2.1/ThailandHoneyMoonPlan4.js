import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p2 from "../../../img/Dubai honeymoon packages plan/202111171812027047-68989d9a41ec11ec91790a58a9feac02.avif";
import p3 from "../../../img/Dubai honeymoon packages plan/p3.jpg";
import p4 from "../../../img/Dubai honeymoon packages plan/p4.webp";
import p5 from "../../../img/Dubai honeymoon packages plan/p5.jpg";

export default function ThailandHoneyMoonPlan4() {
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
      details: "Holiday Style Ao Nang Resort Krabi",
      client_name:
        " Located in Ao Nang Beach, a 6-minute walk from Ao Nang Krabi Boxing Stadium, Holiday Style Ao Nang Resort Krabi. (Formerly: Holiday Inn Express Krabi Ao Nang) provides air-conditioned rooms with free WiFi. Featuring an outdoor   swimming pool, this property is set a short distance from Krua Thara Seafood Restaurant, Aonang Mosque and Island      Hopping Tour Desk, Nopparat Thara Beach. The accommodation features a 24-hour front desk.",
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
      details: "Dubai Half Day Morning City Tour on shared transfer ",
      client_name: " Dubai City Tour - Old and New Dubai Sightseeing tour",
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
      details: "Creek Dhow Cruise Tour with Dinner (4 stars)",
      client_name:
        "Witness the glittering skyline of Dubai as you set sail on the Dhow Cruise! Enjoy refreshing Arabic coffee and dates on the deck while cruising along the coastline of Dubai's fascinating creek.",
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
      details: "Dubai Frame Tour ",
      client_name:
        "Have a picture-perfect day as you set out on a tour of the stunning Dubai Frame, the world's largest standing frame created by two vertical towers. Your journey begins at the interactive 3D museum with immersive storytelling of the city's growth.",
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
    <div className="DubaiTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">Thailand HoneyMoon Plan Packages</h4>
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
          <h1 className="head-content">Thailand HoneyMoon Plan Packages</h1>
          <p className="head-para-content">
            Planning to visit Thailand with your partner anytime soon? Choose Thailand
            Honeymoon Packages to explore Thailand and have the best travel
            experiences ever. This glamorous city has huge buildings,
            jaw-dropping architectural marvels, plenty of adventure parks,
            wonderful views from the desert, gigantic shopping malls and of
            course, royal vibes! It is an amazing blend of rich culture and
            modern technology which must be explored on a honeymoon trip to
            Thailand. You just cannot miss the fantastic marina dinner cruise,
            intimidating hot air balloon ride, views of Thailand Fountain and a lot
            more. So, don’t wait, surprise your other half with an unforgettable
            Thailand trip and cherish the moments forever!
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
