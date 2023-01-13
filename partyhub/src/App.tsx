import React from 'react';
import {Switch} from "react-router";
import {Route, BrowserRouter as Router} from "react-router-dom";
import MainPage from "./pages/MainPage";
import EventPage from "./pages/EventPage";
import LocationPage from "./pages/LocationPage";
import "./index.css"

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path='/' exact={true} component={MainPage}/>
            <Route path='/event/:id' exact={true} component={EventPage}/>
            <Route path='/location/:name' exact={true} component={LocationPage}/>
        </Switch>
    </Router>
);

export default App;
