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
  // react hooks
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

  // runs once page loads
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

  /*
   * @desc calls twilio API on the backend
   * @params
   * @return bool - order sent in successfully or not
   */
  const callAPI = () => {
    // json object to send to backend
    let orderJSON = {
      orderOptions,
      order,
      information,
      price,
    };
    // call API
    console.log("sending in order: " + JSON.stringify(orderJSON));
    let success = false;
    axios
      .post("/api/twilio", orderJSON)
      .then((res) => {
        console.log("api reply: " + res.data.msg);
        success = true;
      })
      .catch((err) => {
        console.error(err);
      });

    // log
    return success;
  };

  /*
   * @desc adds item to order
   * @params object - orderItem
   * @return
   */
  const addToOrder = (orderItem) => {
    console.log("adding " + JSON.stringify(orderItem) + " to order");
    setOrder([...order, orderItem]);
  };

  /*
   * @desc proceeds to next step
   * @params
   * @return
   */
  const nextStep = () => {
    console.log("proceeding to next step");
    setStep(step + 1);
  };

  /*
   * @desc go back to prev step
   * @params
   * @return
   */
  const prevStep = () => {
    console.log("proceeding to next step");
    setStep(step - 1);
  };

  /*
   * @desc removes item from order
   * @params object - orderItem
   * @return
   */
  const removeFromOrder = (itemIndex) => {
    console.log("removing order item at index" + itemIndex);
    let cpy = order.slice(0);
    setOrder([...cpy.slice(0, itemIndex), ...cpy.slice(itemIndex + 1)]);
    console.log("order after removing item: " + JSON.stringify(order));
  };

  /*
   * @desc edit item in order
   * @params int - itemIndex, int - amount, string - note
   * @return
   */
  const editInOrder = (itemIndex, amount, note) => {
    console.log(
      "editing item at index" +
        itemIndex +
        "; amount: " +
        amount +
        ", note: " +
        note
    );
    let cpy = order[itemIndex];
    cpy.amount = amount;
    cpy.note = note;
    setOrder([
      ...order.slice(0, itemIndex),
      cpy,
      ...order.slice(itemIndex + 1),
    ]);
  };
  /*
   * @desc edit part of information
   * @params string - input, event - e
   * @return
   */

  const handleInfoChange = (input) => (e) => {
    console.log("editing information." + input + " to be " + e.target.value);
    information[input] = e.target.value;
    setInformation(information);
  };
  /*
   * @desc edit part of payment
   * @params string - input, event - e
   * @return
   */
  const handlePaymentChange = (input) => (e) => {
    console.log("editing payment." + input + " to be " + e.target.value);
    payment[input] = e.target.value;
    setPayment(payment);
  };
  /*
   * @desc toggle whether user is paying with cash or card
   * @params
   * @return
   */
  const handleCardCashToggle = () => {
    console.log("user paying with cash: " + payment["cash"]);
    payment["cash"] = !payment["cash"];
    setPayment(payment);
  };
  /*
   * @desc toggle whether user is picking up order or wanting delivery
   * @params
   * @return
   */
  const handlePickupDeliveryToggle = () => {
    console.log("user picking up: " + information["cash"]);
    information["pickup"] = !information["pickup"];
    setInformation(information);
  };
  /*
   * @desc edit part of price
   * @params string - input, string - price
   * @return
   */
  const handlePriceChange = (input, value) => {
    console.log("hit");
    price[input] = value;
    setPrice(price);
  };
  /*
   * @desc edit part of OrderOptions
   * @params string - input, event - e
   * @return
   */
  const handleOrderOptionsChange = (input) => (e) => {
    orderOptions[input] = parseInt(e.target.value);
    setOrderOptions(orderOptions);
    console.log(orderOptions);
  };
  /*
   * @desc reset information (used when logging user out)
   * @params
   * @return
   */
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

  // display the appropriate view depending on the current step
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
  }
}
