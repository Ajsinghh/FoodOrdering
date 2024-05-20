import React, {lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Woym from "./components/Woym";
import Restaurants from "./components/Restaurants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Shimmer_dish from "./components/Shimmer_dish"
import useRestaurants from "./utilities/useRestaurants";
import UserContext from "./utilities/UserContext";

const Grocery = lazy(()=>{return import("./components/Grocery")})

//props is nothing but an object of all atrributes that you provided as an argument in jsx code
const AppLayout = () => {
 
  return (
    <UserContext.Provider value = {{loggedInUser : "Ajay"}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const Body = () =>{
  //  const [allDishes, setAllDishes] = useState([]);
   const jsonData = useRestaurants();
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
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer_dish/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
