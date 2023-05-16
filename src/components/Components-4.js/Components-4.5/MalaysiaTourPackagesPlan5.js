import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p22 from "../../../img/malaysia/p22.webp";
import p23 from "../../../img/malaysia/p23.webp";
import p24 from "../../../img/malaysia/p24.webp";
import p25 from "../../../img/malaysia/p25.webp";
import p26 from "../../../img/malaysia/p26.webp";

export default function MalaysiaTourPackagesPlan5() {
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
      details: "Langkawi: Arrival and City tour",
      client_name:
        "Once you have landed at the Langkawi International airport, the agent’s representative will meet and escort you to the hotel. Complete check-in formalities at the hotel and freshen up. Get ready for a city tour of Langkawi, you will begin the tour with Batik Art Village, Dataran Lang, drive past the famous Cenang Beach and visit theUnderwater World. Next visit Kuah Town, Gamat Factory and the last stop would be at Combo Cable Car. After an exciting day, return to the hotel for an overnight stay. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p22,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 1",
    },
    {
      details: "Langkawi: Island Hopping",
      client_name:
        "Wake up to a hearty morning meal and be prepared for an exciting day ahead as you head to amazing places to visit in Langkawi. The first stop will be at Singa Besar Island for Eagle feeding. Next stop would be at Pregnant Maiden Island.",
      image: p23,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    {
      details: "Kuala Lumpur: Departure and Night Tour",
      client_name:
        "Kickstart your day with a filling breakfast and check out from the hotel. Now, you will be transferred by air to Kuala Lumpur for the next leg of your Malaysia 5 day trip. On arrival, you will be greeted by an agent’s representative who will escort you to the hotel. Register yourself at the hotel reception and unwind.",
      image: p24,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Kuala Lumpur: Genting Tour",
      client_name:
        "Your day begins with a sumptuous breakfast, followed by an amazing day trip. Now, it is time to get transferred to Genting Highlands for an adrenaline-charged dose. The place is situated at an altitude of 6,000 feet and is amidst lush green surroundings. Genting is dotted with casinos and a world-class luxury.",
      image: p25,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Kuala Lumpur: Departure",
      client_name:
        "Relish one more breakfast and complete check out formalities at the hotel. Now, you will be transferred to the airport to board your flight back to India. As your flight takes off, you would certainly try to take a glimpse of the landmass that you have just visited with a notion to revisit it. ",
      image: p26,
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
            Malaysia Tour Vacation Packages to explore Malaysia and have the best travel
            experiences ever. This glamorous city has huge buildings,
            jaw-dropping architectural marvels, plenty of adventure parks,
            wonderful views from the desert, gigantic shopping malls and of
            course, royal vibes! It is an amazing blend of rich culture and
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
