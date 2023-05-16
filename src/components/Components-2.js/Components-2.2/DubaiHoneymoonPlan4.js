import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p17 from "../../../img/Dubai honeymoon packages plan/1/p17.webp";
import p18 from "../../../img/Dubai honeymoon packages plan/1/p18.webp";
import p19 from "../../../img/Dubai honeymoon packages plan/1/p19.webp";
import p20 from "../../../img/Dubai honeymoon packages plan/1/p20.webp";
import p21 from "../../../img/Dubai honeymoon packages plan/1/p21.webp";
import p14 from "../../../img/Dubai honeymoon packages plan/1/p14.webp";

export default function DubaiHoneymoonPlan4() {
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
      details: "Arrival at Dubai & Dhow Cruise with dinner",
      client_name:
        "On your arrival, a representative will pick you from the airport and drop you at your hotel where you can rest for a while. You will be picked up in the evening for Dhow Cruise. Take a romantic cruise ride along the Dubai Creek on the famous Dhow Cruise. Enjoy a luxurious international buffet meal with your better half in a magical environment amidst world-class hospitality. Enjoy your overnight stay at the hotel.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p17,
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
      details: "Half-day Dubai city tour and Burj Khalifa",
      client_name:
        "Have a hearty breakfast and set out for a merry half-day city tour of Dubai. Visit Dubai Museum, marvel at the classic architecture of the Jumeirah Mosque, visit the glamorous Burj Al Arab Hotel and the unbelievably luxurious Atlantis Hotel located on the crescent-shaped Palm Island. Spend some cosy and cuddlesome moments at the Jumeirah Beach and take in gorgeous aerial views of the city from atop the Burj Khalifa. Shop at the city’s best shopping malls and gorge on a sumptuous Arabic meal. End the second day of your scintillating Dubai vacation with a peaceful rest at the hotel.",
      position: "INCLUSIONS (CUSTOMISABLE)",
      image: p18,
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
      details: "Leisure time, Desert Safari with Barbecue Dinner",
      client_name: "Have some fresh breakfast and indulge in precious leisure moments with your spouse. Set off for an evening of Desert Safari and thrill out with a number of desert activities like dune bashing and off roading. Watch mesmerising cultural performances by trained artists and dine like royalty on the choice of cuisines laid out for you and your partner on the cool, velvet-smooth sands under the stars. Get to your hotel and retire for the night.",
      image: p19,
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
      details: "Abu Dhabi city tour & visit to Ferrari World",
      client_name:
        "Post a hearty breakfast in the morning, leave for a full-day Abu Dhabi city tour and explore its priceless ancient heritage as well as its modern, fast-paced life. Later, get to Ferrari World and try racing one another at some challenging F1 courses! Day four of your Dubai tour comes to an end with a sound sleep at the hotel.",
      image: p20,
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
      details: "Transfer to Atlantis, Aquaventure & the Lost Chambers",
      client_name:
        "Post a delish breakfast, get transferred to the luxury-loaded Palm Atlantis Hotel, which is the highlight of your 5 nights Dubai honeymoon tour. Marvel at the overwhelmingly-luxurious environment of this beautiful hotel and submerge yourself in it's utterly grand setting. Enjoy an unlimited access to Aquaventure and the Lost Chambers and observe the vivid, colourful marine life together. Enjoy a luxurious overnight stay at the Atlantis on the fifth day of your Dubai holiday.",
      image: p21,
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
      details: "Leave Dubai with everlasting memories",
      client_name:
        "After a wholesome breakfast at the Atlantis hotel, proceed to the airport from where you can board the flight for your onward destination with special memories of your beautiful and utterly romantic vacation in the Middle East!",
      image: p14,
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
