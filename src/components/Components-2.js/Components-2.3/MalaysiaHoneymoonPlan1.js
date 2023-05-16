import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p1 from "../../../img/malaysiahoneymoon/p1.webp";
import p2 from "../../../img/malaysiahoneymoon/p2.webp";
import p3 from "../../../img/malaysiahoneymoon/p3.webp";
import p4 from "../../../img/malaysiahoneymoon/p4.webp";
import p5 from "../../../img/malaysiahoneymoon/p5.webp";

export default function MalaysiaHoneymoonPlan1() {
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
      details: "Kuala Lumpur: Arrival & Night Tour",
      client_name:
        "After your arrival at the airport in Kuala Lumpur, you’ll be transferred to your pre-booked hotel. Check-in to the hotel on arrival and spend some time to rest and freshen up. As the dusk falls, you will be taken for a night tour to explore Kuala Lumpur better. On this night tour, you will be driven through Chinatown which is an open-air bazaar. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p1,
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
      details: "Kuala Lumpur: Genting Day Tour",
      client_name:
        "After breakfast at the hotel, enjoy a trip to Genting Highlands. On your way, you will also make a photo stop at Batu Caves for sometime. Indulge in an all-day excursion at the Genting Highlands dicing at Malaysia’s only Casino- Casino de Genting- and enjoying South East Asia’s longest and world’s fastest cable car ride. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p2,
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
      details: "Langkawi: Transfer & Arrival",
      client_name:
        "After a hearty meal at the hotel, check-out from the hotel and get ready to get transfer to Langkawi. Upon arrival at the hotel, check-in and enjoy the rest of the day relaxing and unwinding after the exhaustion of the travel. Enjoy overnight stay at the hotel.",
      image: p3,
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
      details: "Langkawi: Half Day Island Tour",
      client_name:
        "After a fulfilling meal at the hotel, explore and unveil Langkawi in all its charm with the Langkawi Island Hopping tour. You will get to visit various places upholding the natural and historical beauty of Langkawi. You will get to visit places like Batik and Art Village, Dataran Lang or Eagle’s Square. Moreover, you will get to drive through the famous beach of Cenang passing by the only Underwater World in north of Malaysia. The island tour ends in Kuah Town. As the day ends, return to the hotel and enjoy an overnight stay.",
      image: p4,
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
      details: "Langkawi - Kuala Lumpur: Departure",
      client_name:
        "After a hearty meal, check-out from the hotel and get ready to return to Kuala Lumpur. Once you have reached the airport, depart for your homeland with all the memories gathered in your heart.",
      image: p5,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
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
