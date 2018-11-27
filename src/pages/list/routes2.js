import React from 'react';
import ListPage from "./list";
import ItemDetails from "./item-details";
import { Route } from 'react-router';

export default (
    <Route path = {ListPage.path + '/:id'} component = {ItemDetails} />
);
