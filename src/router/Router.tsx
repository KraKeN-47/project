import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {LandingPage,LoginPage,RegisterPage} from "../pages";

import {paths} from './paths';
const Router = () => {
    console.log("switched")
    return (
    <BrowserRouter >
        <div>
            <Switch>
                {routes.map((route,index) => (
                    <Route key={index} exact {...route} />
                ))}
            </Switch>
        </div>
    </BrowserRouter>)
}
export const routes = [
    {
        path: paths.home,
        component: LandingPage,
        protected: false
    },
    {
        path: paths.login,
        component: LoginPage,
        protected: false
    },
    {
        path: paths.register,
        component: RegisterPage,
        protected: false
    }

]

export default Router