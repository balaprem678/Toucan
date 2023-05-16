import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p12 from "../../../img/Duabi/1/p12.webp";
import p13 from "../../../img/Duabi/1/p13.webp";
import p14 from "../../../img/Duabi/1/p14.webp";
import p15 from "../../../img/Duabi/1/p15.webp";
import p16 from "../../../img/Duabi/1/p16.webp";
import p17 from "../../../img/Duabi/1/p17.webp";
import p18 from "../../../img/Duabi/1/p18.webp";

export default function DubaiTourPackagesPlan4() {
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
      details: "Dubai: Arrival and Dhow Cruise",
      client_name:
        " As you arrive in Dubai, our representative will meet you at the airport and escort you to the hotel. Check into the hotel and take some rest. Later in the evening, sail through the city’s waterways on a traditional Dhow Cruise and enjoy a tasty buffet dinner listening to Arabic music. Transfer back to the hotel and sleep for the night.",
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
    {
      details: "Dubai: Half-day City Tour, Sightseeing ",
      client_name: "Post a hearty breakfast, set out for a joyful half-day Dubai city tour. Lose yourself in the exotic Middle Eastern experience. You will see world-class places that will give you a glimpse of Dubai history, culture, and traditions.",
      image: p13,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 2",
    },
    {
      details: "Dubai: Dolphinarium, Desert Safari",
      client_name:
        "After a tempting breakfast at the hotel, proceed for the Dolphinarium. Indulge in poolside and underwater interactions with dolphins until noon. You will get to see fun-filled dolphin and seal shows at the Dolphinarium, kids are sure to have a great time there.  ",
      image: p14,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 3",
    },
    {
      details: "Dubai: Abu Dhabi City Tour and Ferrari World  ",
      client_name:
        "Have a filling early morning breakfast and embark on a full-day Abu Dhabi city tour. Explore Abu Dhabi’s ancient as well as modern arenas. The bustling capital city is home to world-class museums, parks, dining places, spas, shopping malls, hotels, theaters, and golf courses.  ",
      image: p15,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Dubai: Aquaventure Waterpark and The Lost Chambers ",
      client_name:
        "Post a yummy breakfast, you’ll be taken to Aquaventure and the Lost Chambers at Atlantis The Palm. Enjoy the thrilling water rides throughout the day and explore the vibrant marine life. You can try your hands as sailing, windsurfing, floating climbing walls, and kayaking. Kids can have a great time at the water playground. You will also get to see ruins of Atlantis, more than thousands of years old, deep down the sea.  Return to your hotel and have a sound sleep.",
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
      details: "Dubai: Leisure Day",
      client_name:
        "Begin the sixth day with a delicious breakfast at the hotel. The day is at leisure and you can plan it as per your comfort and ease. Since Dubai is famous for shopping and is home to the biggest and most luxurious shopping malls, on a leisure day, you can plan a visit to these malls. You can go out and see Dubai Mall, BurJuman Mall, Mall of Emirates, Ibn Battuta Mall, and Dubai Outlet Mall. After exploring the biggest shopping destinations, come back to the hotel for a sound sleep. ",
      image: p17,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 4",
    },
    {
      details: "Departure from Dubai",
      client_name:
        "Enjoy a flavorsome breakfast at the hotel and complete the check-out formalities. Get transferred to the airport to board an evening flight back home with everlasting memories of your Dubai holiday.",
      image: p18,
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
        <h4 className="head-2">Dubai Tour Vacation Packages</h4>
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
          <h1 className="head-content">Dubai Tour Vacation Packages</h1>
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
