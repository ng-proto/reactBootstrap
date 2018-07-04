import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import SideNav from "../../components/sidenav/sidenav";
import Home from "../home";
import About from "../about";
import Profile from "../Profile";
import JobSearch from "../jobsearch";
import SignUp from "../signup/index";
import JobDetail from "../jobdetails/index";
import Dashboard from "../dashboard";

import "metro4/build/css/metro-all.css";
import "metro4/build/js/metro.js";
import "jquery/dist/jquery.min.js";

const App = () => (
  <div className="app">
    <SideNav />
    <div class="shifted-content-2 h-100 p-ab">
      <Header />
      <div class="h-100 p-4">
        <main className="container mt-2">
          <Route exact path="/" component={JobSearch} />
          <Route exact path="/dashoboard" component={Dashboard} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/jobSearch" component={JobSearch} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/jobdetail" component={JobDetail} />
        </main>
      </div>
    </div>
  </div>
);

export default App;
