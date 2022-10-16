import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Router, Switch } from 'react-router-dom';
// react router dom helps come up with routes

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Switch>
        {/* switch comes from react router dom,
          says we can have multiple routes inside but only one vis at a time */}
        <Route exact path="/movie/:id">
          <h1>Movie Information</h1>
        </Route>
        {/* if we just say route path="/movies", it will never render as it renders first matching
        both begin with / so first matching is home. write exact to render === */}
        <Route exact path="/actors/:id">
          <h1>Actors</h1>
        </Route>
        <Route exact path="/">
          <h1>Movies</h1>
        </Route>
        <Route exact path="/profile/:id">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
