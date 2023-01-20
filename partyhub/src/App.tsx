import React from 'react';
import {Switch} from "react-router";
import {Route, BrowserRouter as Router} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EventPage from "./pages/EventPage";
import LocationPage from "./pages/LocationPage";
import "./index.css"
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LocationsPage from './pages/LocationsPage';
import ChallengesPage from './pages/ChallengePage';

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path='/' exact={true} component={MainPage}/>
            <Route path='/event/:id' exact={true} component={EventPage}/>
            <Route path='/location/:name' exact={true} component={LocationPage}/>
            <Route path='/home' exact={true} component={HomePage}/>
            <Route path='/contact' exact={true} component={ContactPage}/>
            <Route path='/locations' exact={true} component={LocationsPage}/>
            <Route path='/challenge' exact={true} component={ChallengesPage}/>
        </Switch>
    </Router>
);

export default App;
