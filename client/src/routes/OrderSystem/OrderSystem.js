import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {
  ConfirmView,
  ConfirmedView,
  InformationView,
  OptionsView,
  OrderView,
  ReviewView,
  CheckoutView,
} from "./views/index";

export default function OrderSystem(props) {
  const [orderOptions, setOrderOptions] = React.useState({
    language: 1,
    pd: 1,
  });
  const [menu, setMenu] = React.useState({});
  const [order, setOrder] = React.useState([]);
  const [information, setInformation] = React.useState({
    pickup: false,
    fname: "",
    lname: "",
    phone: "",
    address: "",
    city: "",
    state: "OK",
    zip: "",
    driverNotes: "",
  });
  const [payment, setPayment] = React.useState({
    cash: false,
    name: "",
    cc: "",
    exp: "",
    cvv: "",
  });
  const [price, setPrice] = React.useState({
    subtotal: "0",
    tax: "0",
    fee: "0",
    total: "0",
  });
  const [step, setStep] = React.useState(1);

  useEffect(() => {
    console.log("trigger use effect hook");
    // load menu
    axios
      .get("https://www.neckch.in/sbistro/menu.json")
      .then((res) => setMenu(res.data));

    // load information, if logged in
    // local storage
    if (
      localStorage.getItem("information") !== "undefined" &&
      localStorage.getItem("information") !== null
    ) {
      setInformation(JSON.parse(localStorage.getItem("information")));
    }
    // session storage
    else if (
      sessionStorage.getItem("information") !== "undefined" &&
      sessionStorage.getItem("information") !== null
    ) {
      setInformation(JSON.parse(sessionStorage.getItem("information")));
    }
  }, []);

  const callAPI = () => {
    var orderJSON = {
      orderOptions,
      order,
      information,
      price,
    };
    // call API
    console.log("calling api");
    let success = false;
    axios
      .post("/api/twilio", orderJSON)
      .then((res) => {
        console.log(res.data);
        success = true;
      })
      .catch((err) => {
        console.error(err);
      });

    // log
    console.log(orderJSON);
    return success;
  };
  const addToOrder = (orderItem) => {
    console.log(JSON.stringify(orderItem));
    setOrder([...order, orderItem]);
    console.log(JSON.stringify(order));
  };

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  const removeFromOrder = (itemIndex) => {
    console.log(itemIndex);
    let cpy = order.slice(0);
    setOrder([...cpy.slice(0, itemIndex), ...cpy.slice(itemIndex + 1)]);
    //order.splice(itemIndex, 1);
  };

  const editInOrder = (itemIndex, amount, note) => {
    console.log("editing order");
    let cpy = order[itemIndex];
    cpy.amount = amount;
    cpy.note = note;
    setOrder([
      ...order.slice(0, itemIndex),
      cpy,
      ...order.slice(itemIndex + 1),
    ]);
  };

  const handleInfoChange = (input) => (e) => {
    information[input] = e.target.value;
    setInformation(information);
  };
  const handlePaymentChange = (input) => (e) => {
    payment[input] = e.target.value;
    setPayment(payment);
  };
  const handleCardCashToggle = () => {
    payment["cash"] = !payment["cash"];
    setPayment(payment);
  };
  const handlePickupDeliveryToggle = () => {
    information["pickup"] = !information["pickup"];
    setInformation(information);
  };
  const handlePriceChange = (input, value) => {
    console.log("hit");
    price[input] = value;
    setPrice(price);
  };
  const handleOrderOptionsChange = (input) => (e) => {
    orderOptions[input] = parseInt(e.target.value);
    setOrderOptions(orderOptions);
    console.log(orderOptions);
  };

  const resetInformationState = () => {
    setInformation({
      name: "",
      address: "",
      phone: "",
      driverNotes: "",
      cc: "",
      exp: "",
      cvv: "",
    });
  };
  switch (step) {
    case 1:
      return (
        <OptionsView
          orderOptions={orderOptions}
          handleOrderOptionsChange={handleOrderOptionsChange}
          nextStep={nextStep}
          resetInformationState={resetInformationState}
        />
      );
    case 2:
      return (
        <OrderView
          menu={menu}
          addToOrder={addToOrder}
          prevStep={prevStep}
          nextStep={nextStep}
          resetInformationState={resetInformationState}
        />
      );
    case 3:
      return (
        <ReviewView
          order={order}
          removeFromOrder={removeFromOrder}
          editInOrder={editInOrder}
          price={price}
          handlePriceChange={handlePriceChange}
          pd={orderOptions.pd}
          prevStep={prevStep}
          nextStep={nextStep}
          resetInformationState={resetInformationState}
        />
      );
    case 4:
      return (
        <CheckoutView
          handleInfoChange={handleInfoChange}
          prevStep={prevStep}
          information={information}
          resetInformationState={resetInformationState}
          payment={payment}
          handlePaymentChange={handlePaymentChange}
          handleCardCashToggle={handleCardCashToggle}
          order={order}
          callAPI={callAPI}
          order={order}
          removeFromOrder={removeFromOrder}
          editInOrder={editInOrder}
          price={price}
          handlePriceChange={handlePriceChange}
          pd={orderOptions.pd}
          handlePickupDeliveryToggle={handlePickupDeliveryToggle}
        />
      );
    case 5:
      return (
        <InformationView
          information={information}
          handleInfoChange={handleInfoChange}
          prevStep={prevStep}
          nextStep={nextStep}
          resetInformationState={resetInformationState}
        />
      );
    case 6:
      return (
        <ConfirmView
          prevStep={prevStep}
          nextStep={nextStep}
          resetInformationState={resetInformationState}
        />
      );
    case 7:
      return (
        <ConfirmedView
          callAPI={callAPI}
          resetInformationState={resetInformationState}
        />
      );
  }
}
