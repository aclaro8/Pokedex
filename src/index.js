import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import LayoutPokedex from "./components/LayoutPokedex.jsx";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/auth" render={props => <LayoutPokedex {...props} />} />
            {/*<Route path="/admin" render={props => <LayoutUser {...props} />} />*/}
            <Redirect from="/" to="/auth/pokemonList" />
        </Switch>
    </BrowserRouter>
    ,document.getElementById("root")
  );
