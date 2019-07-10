import React from "react";
import RavioliPlate from "../../appImgs/ravioliPlate.jpg";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeImg">
        <div className="homeIntro">
          <h1>Welcome to FLAVOR!</h1>
          <h3>
            This is NOT a real restaurant. Everything on this site is
            fabricated.
          </h3>
        </div>
      </div>
      <div
        className="homeContainer"
        style={{
          width: "100%",
          backgroundColor: "black",
          position: "relative"
        }}
      >
        <div className="about">
          <div className="explore">Explore</div>
          <div className="about">
            <h1 style={{ color: "gold" }}>
              If it’s grown in the region, we eat it in season.
            </h1>
            <h5>Located in Dallas, Tx</h5>
          </div>
          <div>
            <h3>
              Located within a renovated and repurposed factory in the heart of
              Dallas, FLAVOR Restaurant is among one of the country’s leading
              restaurants dedicated to seasonal, sustainable cuisine.
            </h3>
            <h3>
              FLAVOR’s menu is updated seasonally to best showcase ingredients
              collected by our in-house forager and chef from the local farmers
              market, regional farms, and other artisan purveyors.
            </h3>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <img src={RavioliPlate} alt="" style={{ maxWidth: "100%" }} />
        </div>
        <div className="blackBar" />
        <div className="homeMenuContainer">
          <h1>View Our Menu</h1>
          <Link className="btn" to="/Menu">
            MENU
          </Link>
        </div>
        <div className="blackBar" />
        <div className="restaurantImg" />
        <div className="skylineDiv">
          <div className="bookReservation">
            <div className="reservation">
              <h1>Book A Reservation</h1>
              <button className="btn">Reserve Now</button>
            </div>
          </div>

          <div className="clearReservation">
            <div className="pressLounge">
              <p>Before and After Dining</p>
              <h3
                style={{
                  borderBottom: "solid white 2px",
                  marginBottom: "10px",
                  paddingBottom: "10px"
                }}
              >
                THE PRESS LOUNGE
              </h3>
              <h5>
                Before or after dining with FLAVOR, take the elevator to THE
                PRESS LOUNGE where you will experience some of Dallas’s most
                beautiful and dramatic panoramic views, refined elegance, a
                glass walled interior space, classic cocktails, an extensive
                wine list, seasonally inspired small plates and informed and
                welcoming service. Rated as one of the top rooftops in the
                world.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
