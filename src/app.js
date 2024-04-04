import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Woym from "./components/Woym";
import Restaurants from "./components/Restaurants";

//props is nothing but an object of all atrributes that you provided as an argument in jsx code

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Woym />
      <Restaurants />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
