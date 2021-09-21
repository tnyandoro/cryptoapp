import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryprocurrencies />
            </Route>
            <Route exact path="/crpto/:coinId">
              <CryptoDetails />
            </Route>
          </Switch>
        </div>
      </Layout>
    </div>
    <div className="footer" />
  </div>
);

export default App;
