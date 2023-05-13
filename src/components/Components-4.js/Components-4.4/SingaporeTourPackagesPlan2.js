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

import p9 from "../../../img/singapore/p9.webp";
import p10 from "../../../img/singapore/p10.webp";
import p11 from "../../../img/singapore/p11.webp";
import p12 from "../../../img/singapore/p12.webp";
import p13 from "../../../img/singapore/p13.webp";
import p14 from "../../../img/singapore/p14.webp";
import p15 from "../../../img/singapore/p15.webp";

export default function SingaporeTourPackagesPlan2() {
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
        "When you land at the Singapore Changi Airport, the agent’s representative will be waiting for you. The representative will escort you to the hotel. Check-in to the hotel and get away with the jet lag. Relax for some time before heading for a lifetime experience.",
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
      details: "Singapore: Universal Studios",
      client_name:
        " Greet the morning with a refreshed self before you savor a hearty breakfast. Now, be prepared to ‘Live’ movies at Universal Studios. The very first Hollywood movie theme park of the region, this attraction keeps you intrigued, even after you have stepped out of it. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
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
      details: "Bali: Arrival and day at leisure",
      client_name:
        " Embark on the next leg of your Singapore and Bali family vacation package by heading to Bali today. ",
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
      details: "Bali: Kintamani and Ubud Tour",
      client_name:
        "Enjoy a toothsome breakfast with your loved ones before starting for an enthusiastic day tour to Kintamani and Ubud as included in your Bali family holiday. Kintamani offers you a once in a lifetime experience with its volcano – a popular sightseeing spot. From Mount Batur, you can treat your eyes to a spellbinding scenery. Don’t miss out on the Crater Lake where liquid turquoise collected in a circular depression presents a refreshing site. ",
      image: p12,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details:
        "Bali: Full day Denpasar city tour with a visit to Tanah lot Temple",
      client_name:
        "Greet the morning with a scrumptious breakfast and be prepared to enjoy a day exploring the marvels of Denpasar city, coupled with a visit to Tanah Lot Temple. You will be taken to visit Bali Museum in Denpasar where a rich assortment of objects, both prehistoric and historic is displayed. The items articulate the Balinese culture, aiming at preserving it from modern influences. ",
      image: p13,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    {
      details: "Bali: A watersports day",
      client_name:
        "Enjoy a delicious breakfast with your family and get, set, go to Tanjung Benoa beach to enjoy watersports. Indulge in activities such as parasailing, snorkeling, scuba diving, and Jet Ski. To delight in more water revelry, go for banana boat ride and flying fish. Taking up such activities with your loved ones will allow you some great time together as you sail, steer, and dive in water. ",
      image: p14,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    {
      details: "Bali: Leisure day and departure",
      client_name:
        "Greet another morning with a lip-smacking breakfast and pack your bags as you will be leaving Bali to journey back home today. But before that, you have the day at leisure. ",
      image: p15,
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
