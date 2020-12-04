import React from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';

import { HomeIndex } from './modules/home/home.index';
import { ClientRoutes } from './modules/client/client.routes';

export function RouteList() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><HomeIndex /></Route>
        <ClientRoutes/>
      </Switch>
    </BrowserRouter>
  )
}
