import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './comonent/home/HomePage';
import AboutPage from './comonent/about/AboutPage';
import Header from './comonent/common/Header';
import PageNotFound from './comonent/common/PageNotFound';
import CoursePage from './comonent/course/CoursePage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
