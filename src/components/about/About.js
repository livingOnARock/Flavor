import React from "react";
import aboutHeaderImg from "../../appImgs/aboutHeader.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImg">
        <img src={aboutHeaderImg} alt="" />
      </div>
      <div className="aboutInfo">
        <div className="hoursOfOperation">
          <h2>HOURS OF OPERATION</h2>
          <ul>
            <li>
              <span className="dayOfWeek">SUNDAY:</span> 8am - 10pm
            </li>
            <li>
              <span className="dayOfWeek">MONDAY:</span> 6am - 11pm
            </li>
            <li>
              <span className="dayOfWeek">TUESDAY:</span> 6am - 11pm
            </li>
            <li>
              <span className="dayOfWeek">WEDNESDAY:</span> 6am - 11pm
            </li>
            <li>
              <span className="dayOfWeek">THURSDAY:</span> 6am - 11pm
            </li>
            <li>
              <span className="dayOfWeek">FRIDAY:</span> 6am - 1am
            </li>
            <li>
              <span className="dayOfWeek">SUNDAY:</span> 8am - 1am
            </li>
          </ul>
        </div>
        <div className="aboutText">
          <h2>About US!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Ligula ullamcorper malesuada proin libero nunc consequat. Augue eget
            arcu dictum varius duis at consectetur lorem donec. Et malesuada
            fames ac turpis. Nibh cras pulvinar mattis nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque eleifend donec pretium vulputate sapien nec. Facilisis
            volutpat est velit egestas dui id ornare. Ullamcorper sit amet risus
            nullam eget. Ultricies leo integer malesuada nunc vel risus commodo
            viverra maecenas. Mattis nunc sed blandit libero volutpat. Sed arcu
            non odio euismod lacinia at. Faucibus turpis in eu mi. Sollicitudin
            tempor id eu nisl nunc mi ipsum faucibus vitae. Mauris in aliquam
            sem fringilla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
