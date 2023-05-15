import React, { useState, useEffect } from "react";
import "../../../App.css";
import "../../../css/Comman.css";
import "../../../css/HoneyMoon.css";

import Footer from "../../Footer";
import Navigation from "../../Navigation";

import taxi from "../../../img/Family Package/himachal/taxi.gif";
import sleep from "../../../img/Family Package/himachal/sleep.gif";
import food from "../../../img/Family Package/himachal/vegan-food.gif";

import p1 from "../../../img/Thailand-honeymoon/1/p1.webp";
import p2 from "../../../img/Thailand-honeymoon/1/p2.webp";
import p3 from "../../../img/Thailand-honeymoon/1/p3.webp";
import p4 from "../../../img/Thailand-honeymoon/1/p4.webp";
import p5 from "../../../img/Thailand-honeymoon/1/p5.webp";
import p6 from "../../../img/Thailand-honeymoon/1/p6.webp";

export default function ThailandHoneyMoonPlan1() {
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
      details: "Pattaya: Sightseeing and Leisure Time",
      client_name:
        "Embark on a fascinating journey with our Thailand luxury honeymoon packages as soon as you reach the Bangkok Airport. And, let our representatives transfer you to a hotel for some relaxation. As the dusk falls, let us take you off for some real entertainment. ",
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
      details: "Pattaya: Coral Island tour",
      client_name:
        "Gorge on a wholesome breakfast, and gear up to cruise towards the offshore Coral Island via speedboat. Replete with stretches of white sand and crystal clear water, here you may choose to laze along white sands, and make some beautiful memories with your partner. Or, you may partake in activities, like: parasailing, diving, swimming, and grab a chance to explore coral reefs with this luxury Thailand honeymoon package. Cherish spectacular landscape views, and later hop on a return tour to the Pattay hotel for a relaxing sleep.",
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
      details: "Pattaya: Nong Nooch Village tour",
      client_name:
        "Munch on a scrumptious breakfast, and head towards a mesmerizing tour to Nong Nooch Village as per the luxury honeymoon Thailand package. Get to enjoy an elephant show and an amazing Thai cultural performance. Famed for its skywalk and wide gardens, a visit to this alluring village is quite a treat. Post that, choose to enjoy the rest of the day at leisure, and get back to the hotel for an overnight stay.",
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
      details: "Bangkok: Transfer to Bangkok and Chao Phraya Dinner Cruise",
      client_name:
        "Have a delightful breakfast, and let our Thailand luxury honeymoon package add some more memories to this trip. As you proceed towards the capital city of Bangkok, choose to visit some prominent attractions, en route. Upon arrival, check-in to a Bangkok hotel, and unwind in your room for a while. Later, hop on a luxury Chao Phraya dinner cruise, and experience some romantic moments with your beloved while sailing through the historical landmarks. Indulge in a scrumptious Thai dinner served on the house, and cherish the true essence of Thailand. And later, get back to the hotel for an overnight stay.",
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
      details: "Bangkok: Safari World and Marine Park",
      client_name:
        "Savour a luscious breakfast, and get ready to enjoy a rendezvous with wildlife while we take you off to Safari World. Sprawling over 170 acres, this zoological park has two sections: Safari Park- an open zoo and Marine Park, where you can meet marine animals and enjoy spectacular shows, including; Sea lion Show, Dolphin Show, Horseshoe Stunt Show, Orangutan Show, and many more. Treat your taste buds to an appetizing Thai lunch, and hop on to some water rides for an exhilarating experience. Later, enroute to your hotel, you may choose to spend some time exploring the local markets.",
      image: p5,
      taxi: taxi,
      food: food,
      sleep: sleep,
      hotal: "Hotal",
      Pickup: "Pickup",
      Food: " Food",
      days: "Day - 5",
    },
    {
      details: "Departure",
      client_name:
        "Gear up to pack your bags post having a scrumptious breakfast, and let us escort you to the Bangkok Airport. Board a flight back home, and conclude this trip as per the luxury Thailand honeymoon packages.",
      image: p6,
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
        <h4 className="head-2">Thailand HoneyMoon Packages Plan</h4>
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
          <h1 className="head-content">Thailand HoneyMoon Packages Plan</h1>
          <p className="head-para-content">
            Planning to visit Thailand HoneyMoon with your partner anytime soon?
            Choose Thailand HoneyMoon Packages Plan to explore Thailand
            HoneyMoon and have the best travel experiences ever. This glamorous
            city has huge buildings, jaw-dropping architectural marvels, plenty
            of adventure parks, wonderful views from the desert, gigantic
            shopping malls and of course, royal vibes! It is an amazing blend of
            rich culture and modern technology which must be explored on a
            honeymoon trip to Thailand HoneyMoon. You just cannot miss the
            fantastic marina dinner cruise, intimidating hot air balloon ride,
            views of Thailand HoneyMoon Fountain and a lot more. So, don’t wait,
            surprise your other half with an unforgettable Thailand HoneyMoon
            trip and cherish the moments forever!
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
