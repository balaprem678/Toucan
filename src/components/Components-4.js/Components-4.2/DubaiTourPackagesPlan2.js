import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p1 from "../../../img/Duabi/1/p1.jpg";
import p2 from "../../../img/Duabi/1/p2.jpg";
import p3 from "../../../img/Duabi/1/p3.jpg";
import p4 from "../../../img/Duabi/1/p4.jpg";
import p5 from "../../../img/Duabi/1/p5.jpg";

export default function DubaiTourPackagesPlan2() {
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
      details: "Arrive Dubai – Time at Leisure",
      client_name:
        " On arrival at Dubai International Airport, you'll be transferred to your hotel. Upon arrival check in to the hotel and relax. ",
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
    {
      details: "Dubai: Morning at Leisure; Evening Dhow Cruise with Dinner ",
      client_name:
        " In the evening get ready to experience the Dhow Cruise. Cruising down Dubai creek is a novel experience, one which you cannot miss when in Dubai. Having fancy dinner on a Dhow Cruise with the fascinating lights of Dubai Creek and the soft music in the background, sip your favorite drink and enjoy a buffet dinner on board the cruise.",
      image: p2,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    {
      details:
        "Dubai Half Day City Tour  Followed By At the Top Burj Khalifa – 124th Floor (Non-Prime Hours)  ",
      client_name:
        "After breakfast, proceed for a half day morning city tour, viewing some of the city’s most beautiful landmarks. The Magnificent Jumeriah Mosque built in 1979 is a fine example of modern Islamic architecture. The mosque is the most frequently visited and photographed sight. Tourists must wear appropriate clothing – trousers for men, long sleeves and scarf for women. Open to public only on Sundays and Thursdays. Continue to the Jumeirah Public Beach, pass by the Jumeirah Beach Hotel and stop at the Burj Al Arab - the most luxurious and tallest hotel in the world. ",
      image: p3,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Dubai:  Desert Safari with BBQ dinner",
      client_name:
        "Post breakfast at the hotel, the morning is at leisure  Later in the day you will be picked up from hotel for the Desert Safari around 03:00 P.M. On this tour experience the thrill of a roller coaster ride on the sand dunes. We stop on the highest sand dune to view the beautiful sunset, a great chance to take amazing photographs - so don't forget your camera! We then continue our journey to the Bedouin Campsite located in the heart of the Desert, where soft drinks, water, tea or coffee are available for you to choose from.",
      image: p4,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Dubai Departure:",
      client_name:
        "Today enjoy breakfast at the hotel. Later check out and Transfer to Dubai airport for your departure flight. We hope you take back many happy memories of your holiday. We would like you to write and tell us how you enjoyed your holiday and give us your suggestions.",
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
    <div className="DubaiTourPackagesPlan">
      <Navigation />

      <div className="thailand-home">
        <h4 className="head-2">DubaiHoneyMoon Vacation Packages</h4>
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
          <h1 className="head-content">Dubai Honeymoon Packages</h1>
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
