import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Locations from "./components/locations/Locations";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer1";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Menu" component={Menu} />
        <Route path="/Locations" component={Locations} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
