import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import MovieDetailsPage from '../pages/MovieDetails/MovieDetailsPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/movie/:id' component={MovieDetailsPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
