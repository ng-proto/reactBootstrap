import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";
import Home from "../home";
import About from "../about";
import Profile from "../Profile";
import JobSearch from "../jobsearch";
import SignUp from "../signup/index";
import JobDetail from "../jobdetails/index";
import OrgRole from "../hr-manager/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => (
  <div>
    <Header />

    <main className="container mt-2">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/jobSearch" component={JobSearch} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/jobdetail" component={JobDetail} />
      <Route exact path="/org-role" component={OrgRole} />
    </main>
  </div>
);

export default App;
