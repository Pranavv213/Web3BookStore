import React from 'react';
import Button from 'react-bootstrap/Button';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from './pages/Product';
import Categories from './pages/Categories';

import { useMoralis } from "react-moralis";
import Login from './Login';
const App = () => (
  <>
  <Login/>
  </>
);

export default App;
