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
import p14 from "../../../img/malaysia/p14.webp";
import p15 from "../../../img/malaysia/p15.webp";
import p16 from "../../../img/malaysia/p16.webp";
import p17 from "../../../img/malaysia/p17.webp";
import p18 from "../../../img/malaysia/p18.webp";

export default function MalaysiaTourPackagesPlan3() {
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
        "On your arrival to Singapore airport, an agent’s representative will receive and escort you to the hotel. Check in the hotel, and relax for sometime. In the evening get ready for a Night Safari. ",
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
      details: "Singapore: Half-day City tour and Sentosa Island",
      client_name:
        "The 2nd day begins with a delicious breakfast at the hotel. Later, get ready for a half-day city tour and begin the sightseeing tour with the Central Business District, Art Museum, Civic District, Civilian War Memorial, Dhoby Ghaut, and Esplanade Theatre. Next, discover Singapore Flyer, Istana, Floating Marina Bay, Merlion Statue, Helix Bridge, Suntec City, and Thian Hock Keng Temple. End the half-day city tour with shopping at Plaza Singapura Mall. ",
      image: p14,
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
        "The day begins with a delicious breakfast at the hotel. Once you are done with breakfast get ready for a fun-filled day at Universal Studios in Singapore. It is a theme park which is home to many  entertaining shows, famous movie sets, thrilling rides, and much more. The park has been divided into various themes such as Hollywood, New York, Ancient Egypt, Sci-Fi City, Far Far Away, The Lost World, and Madagascar. After exploring these themes, return to the hotel for a sound sleep.",
      image: p15,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Kuala Lumpur: Transfer, Night Tour",
      client_name:
        "Start for Kuala Lumpur today and embark on a trip that you would cherish for times to come.",
      image: p16,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Kuala Lumpur: Genting Tour",
      client_name:
        "Embark on a marvelous day tour to Genting Highlands as included in this Singapore and Malaysia package.",
      image: p17,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    {
      details: "Kuala Lumpur: Departure",
      client_name:
        "After a hearty breakfast, check out from the hotel as it is time to bid goodbye to Kuala Lumpur. From the hotel, you will be transferred to the airport to catch your flight back home. Return to India with your heart and camera loaded with memories to treasure.",
      image: p18,
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
          <h1 className="head-content">MMalaysia Tour Packages Plan</h1>
          <p className="head-para-content">
            Planning to visit Malaysia with your partner anytime soon? Choose
            Malaysia Honeymoon Packages to explore Malaysia and have the best
            travel experiences ever. This glamorous city has huge buildings,
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
