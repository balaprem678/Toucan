import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p8 from "../../../img/Dubai honeymoon packages plan/1/p8.webp";
import p10 from "../../../img/Dubai honeymoon packages plan/1/p10.webp";
import p11 from "../../../img/Dubai honeymoon packages plan/1/p11.webp";
import p12 from "../../../img/Dubai honeymoon packages plan/1/p12.webp";
import p13 from "../../../img/Dubai honeymoon packages plan/1/p13.webp";
import p14 from "../../../img/Dubai honeymoon packages plan/1/p14.webp";
import p15 from "../../../img/Dubai honeymoon packages plan/1/p15.webp";

export default function DubaiHoneymoonPlan3() {
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
      details: "Arrive in Dubai",
      client_name:
        "Our representative will greet you at the Dubai International Airport and then drive you to the designated hotel. On arrival, you will check into the hotel and freshen up. Afterward, you will proceed for Dhow Cruise across the Dubai Creek. ",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p12,
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
      details: "Desert Safari at Dubai",
      client_name:
        "Enjoy breakfast and go to the Desert Safari Tour. You can be thrilled by sandboarding on the dunes of the desert. You can also ride a camel or quad bike if you want to add more excitement. You can try the henna design on hands or feet as a symbol of the tour. In the evening, you will return to the hotel for overnight stay.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p13,
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
      details: "Dubai: City Tour with Burj Khalifa",
      client_name: "In the morning, after an appetizing breakfast, you will proceed for the Dubai City Tour. You will be visiting Burj Al Arab (fifth tallest hotel in the world), Dubai Museum, Jumeirah Mosque (built solely from white stones) and Jumeirah Beach. You can relax on the white sand of Jumeirah Beach and spend a romantic time with your beloved.",
      image: p14,
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
      details: "Abu Dhabi City Tour",
      client_name:
        "After a healthy breakfast in the morning, you will proceed to visit Abu Dhabi City (UAE’s Capital City). You will visit some of the best buildings in UAE like the Emirates Palace (a luxury five-star hotel) and Sheik Zayed Mosque (the largest mosque in the country). You will also visit Ferrari World; first Ferrari branded theme park with lots of ride and other attractions. Get back to the hotel in Dubai in the evening and relax overnight.",
      image: p15,
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
      details: "Tour to Dolphinarium",
      client_name:
        "After breakfast in the morning, you will visit the Dubai Dolphinarium. You can watch and interact with dolphins and seals at the Dubai Dolphinarium. You can also take pictures with the mammals to make your trip memorable. Afterward, you can enjoy a leisure day on your own doing shopping or simply relaxing at the hotel. You will be staying at the hotel for overnight.",
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
      details: "Dubai to Atlantis",
      client_name:
        "After a yummy breakfast in the morning, you will check out from the hotel and travel to Atlantis. On arrival, you will check into the hotel and freshen up. Later, you will visit Aquaventure Waterpark, the best water park in the country. You can feel adrenaline rush with breathtaking rides and slides. You will also see different marine creatures at the Lost Chamber Aquarium. In the evening, you will return to the hotel for overnight stay.",
      image: p8,
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
        "Enjoy a nice breakfast and get transferred to the airport. You will leave Dubai with plenty of unforgettable memories to remember for a lifetime.",
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
