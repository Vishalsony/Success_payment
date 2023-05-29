import React, { useEffect } from "react";
import axios from "axios";
import { useOutletContext, useNavigate } from "react-router-dom";

const Checkout = (props) => {
  const navigate = useNavigate();
  const appData = useOutletContext();
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    appData.setLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post(`${process.env.API_URL}/payment/orders`, {
      data: btoa(appData.amount),
    });

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: appData.Name,
      description: `Buy ${appData.gems} for Rs. ${appData.amount}`,
      image: appData.logo,
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          `${process.env.API_URL}/payment/success`,
          data
        );
        appData.setLoading(false);
        if (result.data.msg != "success") {
          if (appData.platform == 'web') {
            window.location.href = appData.redirectUrlFailed;
          } else {
            navigate("/failed");
          }
        } else {
          appData.setPaymentSuccessData(data);
        }
      },
      theme: {
        color: appData.colorTheme,
      },
      modal: {
        ondismiss: function () {
          if (appData.platform == 'web') {
            window.location.href = appData.redirectUrlFailed;
          } else {
            navigate("/failed");
          }
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return appData.loading ? (
    <>loading...</>
  ) : (
    <button className="App-link" onClick={displayRazorpay}>
      {appData.name}Pay ₹{appData.amount}
    </button>
  );
};

export default Checkout;
