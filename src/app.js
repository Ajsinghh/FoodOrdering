import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Woym from "./components/Woym";
import Restaurants from "./components/Restaurants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* Changed from 'RouterProvider' to 'Routes' */}
        <Route path="/" element={<AppLayout />} errorElement={<Error />} />
        <Route path="/about" element={<About />} errorElement={<Error />} />
        <Route path="*" element={<Error />} />{" "}
        {/* Catch-all route for 404 errors */}
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
