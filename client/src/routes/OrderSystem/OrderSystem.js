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
  ContactView,
  PaymentView,
} from "./views/index";
import menuJson from "../../assets/menu.json";
// constants
const TAXRATE = 0.09;

export default function OrderSystem(props) {
  // react hooks
  const [options, setOptions] = React.useState({
    english: true,
    pickup: false,
    cash: false,
    dfee: 0,
  });
  const [menu, setMenu] = React.useState({});
  const [order, setOrder] = React.useState([]);
  const [information, setInformation] = React.useState({
    email: "",
    fname: "",
    lname: "",
    address: "",
    city: "",
    state: "OK",
    zip: "",
    phone: "",
    driverNotes: "",
    cc: "",
    exp: "",
    cvv: "",
    driverNotes: "",
  });
  const [payment, setPayment] = React.useState({
    name: "",
    cc: "",
    exp: "",
    cvv: "",
  });
  const [price, setPrice] = React.useState({
    subtotal: 0,
    tax: 0,
    dfee: "Not yet calculated",
    total: 0,
  });
  const [step, setStep] = React.useState(1);
  const [dfeeCalced, setDfeeCalced] = React.useState(false);

  // runs once page loads
  useEffect(() => {
    console.log("trigger use effect hook");
    // load menu
    /**axios
      .get("https://www.neckch.in/sbistro/menu.json")
      .then((res) => setMenu(res.data));
    **/
    setMenu(menuJson);

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
   * @desc adds item to order
   * @params object - orderItem
   * @return
   */
  const addToOrder = (orderItem) => {
    console.log("adding " + JSON.stringify(orderItem) + " to order");
    // calculate change to price
    let subtotal =
      price.subtotal + parseInt(orderItem.amount) * parseFloat(orderItem.price);
    let tax = subtotal * TAXRATE;
    let dfee = price.dfee;
    let total = subtotal + tax;
    if (!isNaN(dfee)) total += dfee;
    setPrice({ subtotal, tax, dfee, total });
    // add item to order
    setOrder([...order, orderItem]);
    console.log("order after adding item: " + JSON.stringify(order));
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
    // calculate change to price
    let subtotal =
      price.subtotal -
      parseInt(order[itemIndex].amount) * parseFloat(order[itemIndex].price);
    let tax = subtotal * TAXRATE;
    let dfee = price.dfee;
    let total = subtotal + tax;
    if (!isNaN(dfee)) total += dfee;
    setPrice({ subtotal, tax, dfee, total });
    // remove item from order

    let cpy = order.slice(0);
    setOrder([...cpy.slice(0, itemIndex), ...cpy.slice(itemIndex + 1)]);
    console.log("order after removing item: " + JSON.stringify(order));
  };

  /*
   * @desc edit item in order
   * @params int - itemIndex, int - amount, string - note
   * @return
   */
  const editInOrder = (itemIndex, amountChange, note) => {
    console.log(
      "editing item at index" +
        itemIndex +
        "; amount: " +
        amountChange +
        ", note: " +
        note,
    );
    // calculate change to price
    let subtotal =
      price.subtotal + amountChange * parseFloat(order[itemIndex].price);
    let tax = subtotal * TAXRATE;
    let dfee = price.dfee;
    let total = subtotal + tax;
    if (!isNaN(dfee)) total += dfee;
    setPrice({ subtotal, tax, dfee, total });

    // edit item in order
    let cpy = order[itemIndex];
    cpy.amount += amountChange;
    cpy.note = note;
    order[itemIndex] = cpy;
    setOrder(order);
    console.log("order after editing item: " + JSON.stringify(order));
  };

  /*
   * @desc edit part of information
   * @params string - input, event - e
   * @return
   */
  const handleInfoChange = (input) => (e) => {
    information[input] = e.target.value;
    setInformation(information);
    setDfeeCalced(false);
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
    options["cash"] = !options["cash"];
    setOptions(options);
  };

  /*
   * @desc toggle whether user is picking up order or wanting delivery
   * @params
   * @return
   */
  const handlePickupDeliveryToggle = () => {
    console.log("user picking up: " + information["cash"]);
    options["pickup"] = !options["pickup"];
    setOptions(options);
    // set delivery fee
    let initdfee = isNaN(price.dfee) ? 0 : price.dfee;
    options.pickup ? (price.dfee = 0) : (price.dfee = options.dfee);
    price.total += price.dfee - initdfee;
    setPrice(price);
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
   * @desc reset information (used when logging user out)
   * @params
   * @return
   */
  const resetInformationState = () => {
    setInformation({
      email: "",
      fname: "",
      lname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      driverNotes: "",
      cc: "",
      exp: "",
      cvv: "",
      driverNotes: "",
    });
  };
  const setDeliveryFee = (dfee) => {
    console.log("yup here");
    options.dfee = dfee;
    setOptions(options);
    price.dfee = dfee;
    setPrice(price);
  };
  // display the appropriate view depending on the current step
  switch (step) {
    /**case 1:
      return (
        <OptionsView
          options={options}
          handleoptionsChange={handleoptionsChange}
          nextStep={nextStep}
          resetInformationState={resetInformationState}
        />
      );**/

    case 1:
      return (
        <OrderView
          menu={menu}
          order={order}
          addToOrder={addToOrder}
          resetInformationState={resetInformationState}
          prevStep={prevStep}
          nextStep={nextStep}
          history={props.history}
        />
      );
    case 2:
      return (
        <ReviewView
          order={order}
          price={price}
          removeFromOrder={removeFromOrder}
          editInOrder={editInOrder}
          handlePriceChange={handlePriceChange}
          resetInformationState={resetInformationState}
          prevStep={prevStep}
          nextStep={nextStep}
          history={props.history}
        />
      );
    case 3:
      return (
        <ContactView
          options={options}
          dfeeCalced={dfeeCalced}
          resetInformationState={resetInformationState}
          handleInfoChange={handleInfoChange}
          information={information}
          handlePickupDeliveryToggle={handlePickupDeliveryToggle}
          price={price}
          setDeliveryFee={setDeliveryFee}
          setDfeeCalced={setDfeeCalced}
          nextStep={nextStep}
          prevStep={prevStep}
          history={props.history}
        />
      );
    case 4:
      return (
        <PaymentView
          options={options}
          resetInformationState={resetInformationState}
          payment={payment}
          handlePaymentChange={handlePaymentChange}
          handleCardCashToggle={handleCardCashToggle}
          nextStep={nextStep}
          prevStep={prevStep}
          history={props.history}
        />
      );
    case 5:
      return (
        <ConfirmView
          information={information}
          payment={payment}
          order={order}
          removeFromOrder={removeFromOrder}
          editInOrder={editInOrder}
          price={price}
          handlePriceChange={handlePriceChange}
          options={options}
          nextStep={nextStep}
          prevStep={prevStep}
          history={props.history}
        />
      );
    case 6:
      return (
        <ConfirmedView
          resetInformationState={resetInformationState}
          options={options}
          order={order}
          information={information}
          payment={payment}
          price={price}
          history={props.history}
        />
      );
    case 3:
      return (
        <CheckoutView
          options={options}
          handleInfoChange={handleInfoChange}
          prevStep={prevStep}
          information={information}
          resetInformationState={resetInformationState}
          payment={payment}
          handlePaymentChange={handlePaymentChange}
          handleCardCashToggle={handleCardCashToggle}
          order={order}
          order={order}
          removeFromOrder={removeFromOrder}
          editInOrder={editInOrder}
          price={price}
          handlePriceChange={handlePriceChange}
          pd={options.pd}
          handlePickupDeliveryToggle={handlePickupDeliveryToggle}
          setDeliveryFee={setDeliveryFee}
          dfeeCalced={dfeeCalced}
          setDfeeCalced={setDfeeCalced}
          history={props.history}
        />
      );
  }
}
