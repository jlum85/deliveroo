import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Content from "./components/Content";
import Cart from "./components/Cart";

import "./App.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenus] = useState({});

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
    const obj = response.data.restaurant;
    setRestaurant(obj);
    setMenus({ ...getActiveMenu(response.data.menu) });
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
            <Content menu={menu} />
            <Cart />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
