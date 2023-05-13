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

import p7 from "../../../img/singapore/p7.webp";
import p17 from "../../../img/singapore/p17.webp";
import p18 from "../../../img/singapore/p18.webp";
import p19 from "../../../img/singapore/p19.webp";
import p20 from "../../../img/singapore/p20.webp";

export default function SingaporeTourPackagesPlan3() {
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
      details: "Singapore: Arrival",
      client_name:
        "Arrive in Singapore and transfer to the hotel. Complete check in formalities, and relax for a while. You can utilize this leisure time to explore the local markets or nearby attractions. Later, enjoy night safari to come face to face with wildlife in their natural habitat. Return to the hotel for the night.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p7,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 1",
    },
    {
      details: "Singapore: City Tour with Sentosa",
      client_name:
        " Post breakfast, leave for an exhaustive tour of Sentosa, and enjoy a cable car ride. At Sentosa, you can enjoy a plethora of activities and entertainment options. You will also get to explore S.E.A. Aquarium, and enjoy the Wings Of Time show at night. Later, return to your hotel for the night.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p17,
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
        "After a lovely breakfast, it is time to leave for the planned day itinerary, which is a day spent exploring the many nuances of Universal Studios. From rides to shows, you can partake in a lot of enjoyment here. Later, return to the hotel for the night. ",
      image: p18,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Singapore: Day trip to LEGOLAND",
      client_name:
        "One of the biggest highlights of this tour is this day trip to LEGOLAND® Malaysia. With this Singapore package with LEGOLAND® theme park, not only do you get to visit another country, but also get to spend time at the very popular LEGOLAND®, where you get to enjoy rides, shows, dining options and much more. After an exciting day spent here, return to your hotel in Singapore for the night.",
      image: p19,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Singapore: Departure",
      client_name:
        "Enjoy your breakfast, after which you check out of the hotel and transfer to the airport. Once there, catch your flight back home.",
      image: p20,
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
