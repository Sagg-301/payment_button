import React from 'react';
import PaymentForm from './components/PaymentForm'
import Receipt from './components/Receipt'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <PaymentForm total={"5.000.000,00"} />
  );
}

export default App;
