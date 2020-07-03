import React from "react";

import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home/Home";

import Resume from "./Components/Resume/Resume";

import Portfolio from './Components/Portfolio/Portfolio';

import App from './Components/App/App';

import Contact from './Components/Contact/Contact'

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
     <Route path="/Resume" component={Resume} />
     <Route path="/Portfolio" component={Portfolio} />
     <Route path="/Contact" component={Contact} />
     <Route path="/Home" component={Home} />
     
   </Switch>
   </BrowserRouter>,
   rootElement
 );
 