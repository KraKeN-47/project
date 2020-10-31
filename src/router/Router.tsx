import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import LandingPage from "../pages/landingPage";

// eslint-disable-next-line import/no-anonymous-default-export
const R = () => (
    <BrowserRouter >
        <div>
            <Switch>
                {routes.map(route => (
                    <Route {...route}/>
                ))}
            </Switch>
        </div>
    </BrowserRouter>)

export const routes = [
    {
        path: '/home',
        component: LandingPage,
        protected: false
    },
    {
        path: '/test',
        component: LandingPage,
        protected: false
    }

]

export default R