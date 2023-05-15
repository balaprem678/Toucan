import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p13 from "../../../img/malaysia/p13.webp";
import p7 from "../../../img/malaysia/p7.webp";
import p2 from "../../../img/malaysia/p2.jpg";
import p5 from "../../../img/malaysia/p5.webp";
import p19 from "../../../img/malaysia/p19.webp";
import p20 from "../../../img/malaysia/p20.webp";
import p21 from "../../../img/malaysia/p21.webp";

export default function MalaysiaTourPackagesPlan4() {
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
      details: "Singapore: Arrival and Night Safari",
      client_name:
        "Once your flight lands on the Singapore International airport, you will be greeted and escorted to the hotel. Register yourself at the hotel reception and freshen up. At night, be prepared for an exceptional Night Safari trip, which is among the top things to do in Singapore. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p13,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 1",
    },
    {
      details: "Singapore: Half-day City Tour and Sentosa Island",
      client_name: "Wake up to a hearty morning meal and get ready to explore the places to see in Singapore with a half-day city tour today. Head to marvel at the myriad attractions dotted all over the city such as Art Museum, Esplanade Theatre, Civilian War Memorial, CBD, Dhoby Ghaut, and Civic District. Next, you will visit Helix Bridge, gigantic Singapore flyer, Istana on Orchard road, Merlion Statue, largest floating Marina Bay, Suntec City, and Thian Hock Keng Temple. After sightseeing, stopover at Plaza Singapura for shopping.",
      image: p7,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    {
      details: "Singapore: Universal Studios",
      client_name:
        "Arise to a filling breakfast and set off to partake in life-size celebrations of movies at the Universal Studios – Southeast Asia's first Hollywood movie theme park. In this world class theme park, which is among the top attractions in Singapore, you can go beyond the screen and take a movie-themed joyride.",
      image: p2,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Langkawi: Transfer",
      client_name:
        "Begin your day with a delicious breakfast and checkout from the hotel. Now, get transferred to the airport and board your flight to Langkawi. On arrival at Langkawi airport, you will be escorted to your hotel. Check-in the hotel and spend rest of the at the hotel. ",
      image: p5,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Langkawi: Half-day city tour",
      client_name:
        "Kickstart your day with a toothsome morning meal and be prepared to indulge in an action-packed day as per your Singapore and Malaysia tour. On this day you will get a glimpse of rich history and popular attractions.",
      image: p19,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    {
      details: "Langkawi: Leisure Day",
      client_name:
        "The 6th day of the tour is a leisure day and you can plan it as per your convenience. You either choose to stay at the hotel or explore beautiful places like Paradise 3D Museum, Telaga Tujuh Waterfall, Galeria Perdana, Mahsuri Tomb and Museum, and many other popular places. In the evening, come back to the hotel for an overnight stay.",
      image: p20,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 6",
    },
    {
      details: "Langkawi: Departure",
      client_name:
        "Begin the seventh day of the tour with a flavorsome breakfast. Later pack your bags and complete all the check-out formalities. You will get a transfer to the airport from where you can board a flight back to your place. ",
      image: p21,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 7",
    },
   

  ]);

  return (
    <div className="DubaiTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">Malaysia Tour Packages Plan</h4>
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
          <h1 className="head-content">Malaysia Tour Packages Plan</h1>
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
