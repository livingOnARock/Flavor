import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contactInfo">
        <h2>Flavor</h2>
        <h4>Mexican Restaurant focused on the freshest supplies</h4>
        <h1>(111) 222 - 3333</h1>
      </div>
      <div className="emailWrapper">
        <h1>EMAIL US</h1>
        <div className="emailSectionHeader">
          <div className="emailLabel">1</div>
          <div className="emailLabelHeader">Personal Info</div>
        </div>
        <div className="emailContainer">
          <form>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="FIRST NAME"
            />

            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="LAST NAME"
            />

            <input
              type="email"
              id="email"
              name="EMAIL"
              placeholder="example@mail.com"
            />
            <div className="emailSectionHeader">
              <div className="emailLabel">2</div>
              <div className="emailLabelHeader">Message</div>
            </div>
            <textarea
              id="comment"
              name="comment"
              placeholder="Write something.."
            />

            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
