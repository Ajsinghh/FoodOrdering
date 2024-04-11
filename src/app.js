import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Woym from "./components/Woym";
import Restaurants from "./components/Restaurants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { useState, useEffect } from "react";
import Shimmer_dish from "./components/Shimmer_dish"

//props is nothing but an object of all atrributes that you provided as an argument in jsx code

const AppLayout = () => {
 
  return  (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const Body = () =>{
  //  const [allDishes, setAllDishes] = useState([]);
   const [jsonData, setJsonData] = useState(null);
   useEffect(() => {
     fetchData();
   }, []);
   const fetchData = async () => {
     const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9009877&lng=80.2279301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     );
     const json = await data.json();
     setJsonData(json);
     console.log(json);
    //  setAllDishes(json.data.cards[0].card.card.imageGridCards.info);
   };
  return jsonData === null ? (
    <Shimmer_dish />
  ) : (
    <div>
      <Woym jsonData = {jsonData}/>
      <Restaurants jsonData={jsonData}/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
          path:"/",
          element:<Body/>,
          errorElement:<Error/>
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element:<Contact/>,
        errorElement: <Error/>
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantsMenu/>,
        errorElement:<Error/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
