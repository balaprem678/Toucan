import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import { Link } from "react-router-dom";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p2 from "../../../img/singapore/p2.webp";
import p3 from "../../../img/singapore/p3.webp";
import p4 from "../../../img/singapore/p4.webp";
import p5 from "../../../img/singapore/p5.webp";
import p6 from "../../../img/singapore/p6.webp";
import p7 from "../../../img/singapore/p7.webp";

export default function SingaporeTourPackagesPlan1() {
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
      client_name: "Get a unique experience at Night Safari in Singapore.",
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
      details: "Singapore: Half-day City Tour, Sentosa Island",
      client_name:
        " Begin the day with breakfast at the hotel and get ready for a half-day city tour. You will see famous places like the Art Museum, Civilian War Memorial, Central Business District, Dhoby Ghaut, Esplanade Theatre, and Civic District. Next, you will discover Helix Bridge which is known for its remarkable architecture, gigantic Singapore flyer, Istana,Marina Bay, Suntec City, Merlion Statue, and Thian Hock Keng Temple. After sightseeing, stopover at Plaza Singapura for shopping.",
      position: "INCLUSIONS (CUSTOMISABLE)",
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
      details: "Singapore: Universal Studios",
      client_name:
        " Start the day with breakfast at the hotel. After breakfast, get ready for an entire day excursion to Universal Studios. The place is home to exciting rides, theme parks, entertaining shows, and a lot more. Get a chance to meet your favorite cartoon characters, see majestic movie sets, and explore different theme zones such as Sci-Fi City, Ancient Egypt, Madagascar, Hollywood, New York, and Far Far Away. After spending a fun-filled day, get back to the hotel for a peaceful sleep.",
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
      details: "Singapore: Gardens By the Bay",
      client_name:
        "After breakfast at the hotel, you will go for a day visit to one of the top-rated tourist destinations in Singapore; Gardens by the Bay. It is a gorgeous park comprising three waterfront gardens. You can visit Supertree grove, Cloud Forest, or Flower Dome in the park. These Supertrees are the main highlight of the gardens and have a height of around 25 meters. It’s a whole new world when you enter the park. The spellbinding park is spread in an area of 101 hectares and is one of the most visited tourist spots in Singapore. Afterwards, you will return to the hotel for a night stay.",
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
      details: "Singapore: Leisure Day ",
      client_name:
        "Begin the day with a flavoursome breakfast at the hotel and then plan the day ahead as per your convenience. Since the day is at leisure, you can either stay at the hotel and relax or choose to go out. You can explore popular malls in Singapore such as The Shoppes, Orchard Central, VivoCity, and Paragon. Return to the hotel for an overnight stay, after shopping.",
      image: p6,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    {
      details: "Singapore: Departure",
      client_name:
        "After breakfast at the hotel, you will check-out and get a transfer to the airport for a further journey. You will have lots of happy memories from the tour.",
      image: p7,
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
    <div className="SingaporeTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">Singapore Tour Packages Plan</h4>
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
          <h1 className="head-content">Singapore Tour Packages Plan</h1>
          <p className="head-para-content">
            Singapore boasts the world's most efficient and developed public
            transport systems. Thanks to modern innovations, traveling around
            Singapore is just a matter of few minutes. Apart from the
            mind-blowing transport system, Singapore is also a cultural hub for
            tourists. Whether you are craving for some Indian snacks or wish to
            visit the temples, the MRT system will take you there in the blink
            of an eye. From feasting to sightseeing, Singapore offers a host of
            activities you can enjoy. Also, if you are looking for some off-beat
            experiences, get ready to explore more and more in Singapore.
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
      <div className="go-back">
        <div className="container-fluid ">
          <Link to={"/SingaporeTourPackages"} className="nav-link">
            <button className="view-deal">Go Back</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
