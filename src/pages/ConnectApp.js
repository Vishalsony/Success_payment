import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import config from "../config.js";

const ConnectApp = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { appId, uid: encodedUid, planId: encodedPlanId, platform: encodedPlatform } = params;
  const uid = atob(encodedUid);
  const planId = atob(encodedPlanId);
  const platform = atob(encodedPlatform);
  const [loading, setLoading] = useState(true);
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);
  const app = initializeApp({ ...config.firebaseConfig[appId] });
  const db = getFirestore(app);
  const [amount, setAmount] = useState(0);
  const [gems, setGems] = useState(0);
  useEffect(() => {
    if (paymentSuccessData != null) {
      setLoading(true);
      /* INSERT SUCCESS TRANSACTION INTO FIREBASE

      */
      if (platform == 'web') {
        window.location.href = `${config.successRedirects[appId]}/${paymentSuccessData.razorpayPaymentId}`;
      } else {
        navigate(`/success/${paymentSuccessData.razorpayPaymentId}`);
      }
    }
  }, [paymentSuccessData]);
  useEffect(() => {
    /* GET AMOUNT AND GEMS FROM FIREBASE
    
    */
   setAmount(1);
   setGems(1);
  }, [appId]);
  return (
    <div>
      <p>{config.appNames[appId]}</p>
      <Outlet
        context={{
          loading,
          setLoading,
          setPaymentSuccessData,
          amount,
          Name: config.appNames[appId],
          gems,
          logo: config.logos[appId],
          colorTheme: config.colorThemes[appId],
          platform,
          redirectUrlFailed: config.failedRedirects[appId],
        }}
      />
    </div>
  );
};

export default ConnectApp;
