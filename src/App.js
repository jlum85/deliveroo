import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Cart from "./components/Cart";
import Restaurant from "./components/Restaurant";

import "./App.css";
import axios from "axios";

function App() {
  const data = [
    { title: "Brunch vegan", count: 2, price: 25 },
    { title: "Granola parfait bio", count: 3, price: 6.6 }
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenus] = useState({});
  const [cart, setCart] = useState([]);

  // console.log("render app : " + isLoading);

  const getActiveMenu = objMenus => {
    const keys = Object.keys(objMenus);
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
      if (objMenus[keys[i]].length > 0) {
        obj[keys[i]] = [...objMenus[keys[i]]];
      }
    }
    return obj;
  };

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setRestaurant(response.data.restaurant);
    setMenus({ ...getActiveMenu(response.data.menu) });
    console.log("fetch data");
  };

  // A la création
  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Header />

      {isLoading ? (
        <p className="loading">Chargement en cours...</p>
      ) : (
        <>
          <Restaurant restaurant={restaurant} />
          <div className="container">
            <div className="wrapperMenu">
              <Content menu={menu} />
              <Cart cart={cart} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
