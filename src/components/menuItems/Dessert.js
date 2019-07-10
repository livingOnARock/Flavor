import React from "react";
import dessertCake from "../../appImgs/dessertCake.jpg";
const dessert = () => {
  return (
    <div
      classname="Container"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <h1 className="mainMenuHeader">DESSERTS</h1>
      <div className="desserts blackBackground">
        <div className="startersImg menuSectionImg ">
          <img className="img" src={dessertCake} alt="" />
        </div>
        <div className="menuInfo order1">
          <h1> POSTRES</h1>
          <div className="eachMenuItem">
            <h3>MEXICAN APPLE PIE</h3>
            <h5>Sizzled in Mexican brandy butter, with cinnamon ice cream</h5>
            <p>(1030cal)</p>
          </div>
          <div className="eachMenuItem">
            <h3>CHURROS</h3>
            <h5>
              With raspberry chocolate sauce and creamy mango sauce to dip
            </h5>
            <p>(1010cal)</p>
          </div>
          <div className="eachMenuItem">
            <h3>MANGO TRES LECHES</h3>
            <h5>Mango vanilla cake, creamy mango sauce</h5>
            <p>(790cal)</p>
          </div>
          <div className="eachMenuItem">
            <h3>TRES CHOCOLATE BROWNIE</h3>
            <h5>
              With walnuts on a sizzling skillet with Mexican brandy butter and
              vanilla ice cream
            </h5>
            <p>(1570cal)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dessert;
