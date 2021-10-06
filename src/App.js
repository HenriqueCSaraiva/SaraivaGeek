import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Carousel from './components/carousel/Carousel'
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          {/* Login */}
          <Route path="/Login">
            <Login />
          </Route>

          {/* Checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          {/* Default Route */}
          <Route path='/'>
            <Header />
            <Banner />
            <Carousel />
            <Cards />
            <Footer />
          </Route>

          {/* */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
