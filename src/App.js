import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" />
    <Route path="/About" />
    <Route path="/Contact" />
  </div>
);

export default App;
