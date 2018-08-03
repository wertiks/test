import React from 'react';
import App from "./app";
import { Route } from 'react-router';

export default (
    <Route component={ App } path={ App.path }>
        { console.log('test ', App.path) }
    </Route>
);