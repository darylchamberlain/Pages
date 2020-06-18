import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./Components/Page1/Page1";
import Resume from "./Components/Resume/Resume";
import Portfolio from './Components/Portfolio/Portfolio';

import App from './Components/App/App';

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Page1} />
     <Route path="/Resume" component={Resume} />
     <Route path="/Page1" component={Page1} />
     <Route path="/Portfolio" component={Portfolio} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );
 