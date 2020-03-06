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
    <Router>
      <Switch>
          <Route path="/pay">
            <PaymentForm total={"5.000.000,00"} />
          </Route>
          <Route path="/receipt">
            <Receipt total={"5.000.000,00"} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
