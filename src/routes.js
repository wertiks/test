import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, HomeRoutes } from './pages/home/index';
import { ListPage, ListRoutes, ItemDetails, ItemDetailsRoutes } from './pages/list/index';
import { ContactPage, ContactRoutes } from './pages/contact/index';
import { TrainPage, TrainRoutes } from './pages/train/index';
import { ErrorPage, ErrorRoutes } from './pages/error/index';


export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        {ContactRoutes}
        {HomeRoutes}
        {ItemDetailsRoutes}
        {ListRoutes}
        {TrainRoutes}
        {ErrorRoutes}
        <Route path='*' component={ErrorPage}/>
    </Switch>
);