import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Breakfast from "../menuItems/Breakfast";
import LunchDinner from "../menuItems/LunchDinner";
import dessert from "../menuItems/Dessert";
import MenuHeader from "../menuHeader/MenuHeader";
import "./Menu.css";
import FajitaImg from "../../appImgs/fajitasImg.jpg";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menuHeader">
        <img src={FajitaImg} alt="" />
      </div>
      <div className="menuItemsContainers">
        <BrowserRouter>
          <div className="menuWrapper">
            <MenuHeader />
            <Switch>
              <Route exact path="/Menu/" component={Breakfast} />
              <Route exact path="/Menu/LunchDinner" component={LunchDinner} />
              <Route exact path="/Menu/dessert" component={dessert} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Menu;
