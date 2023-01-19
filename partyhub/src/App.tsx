import React from 'react';
import {Switch} from "react-router";
import {Route, BrowserRouter as Router} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EventPage from "./pages/EventPage";
import "./index.css"
import HomePage from "./pages/HomePage";

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path='/' exact={true} component={MainPage}/>
            <Route path='/event/:id' exact={true} component={EventPage}/>
            <Route path='/home' exact={true} component={HomePage}/>
        </Switch>
    </Router>
);

export default App;
