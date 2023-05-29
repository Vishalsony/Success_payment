import React from "react";
import './App.css';
import ConnectApp from './pages/ConnectApp';
import Checkout from './pages/Checkout';
import PaymentPage from './pages/PaymentPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentTick from "./pages/PaymentTick";


function App() {
  return (
    <div className="CheckoutPage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectApp />}>
            <Route path="/checkout/:platform/:appId/:uid/:planId" element={<Checkout />} />
          </Route>
          <Route path="/pay" element={<PaymentPage/>} />
          <Route path="/tick" element={<PaymentTick status="pass"/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
