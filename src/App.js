import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Cart from "./components/Cart";
import Restaurant from "./components/Restaurant";

import "./App.css";
import axios from "axios";

function App() {
  const data = [
    { id: "1519055545-89", title: "Brunch vegan", count: 2, price: 25 },
    { id: "1519055545-92", title: "Granola parfait bio", count: 3, price: 6.6 }
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenus] = useState({});
  const [products, setProducts] = useState([]);

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

  const getIndexFromId = idToFind => {
    return products.findIndex(obj => obj.id === idToFind);
  };

  const moreProduct = product => {
    const newProducts = [...products];
    const idx = getIndexFromId(product.id);
    if (idx === -1) {
      newProducts.push({
        id: product.id,
        title: product.title,
        count: 1,
        price: product.price
      });
    } else {
      newProducts[idx].count = newProducts[idx].count + 1;
    }
    setProducts(newProducts);
  };

  const lessProduct = product => {
    const newProducts = [...products];
    const idx = getIndexFromId(product.id);
    if (idx >= 0) {
      newProducts[idx].count = newProducts[idx].count - 1;
      if (newProducts[idx].count === 0) {
        newProducts.splice(idx, 1);
      }
    }
    setProducts(newProducts);
  };

  const onClickAdd = product => {
    moreProduct(product);
  };

  const onClickLess = product => {
    lessProduct(product);
  };

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setRestaurant(response.data.restaurant);
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
            <div className="wrapperMenu">
              <Content menu={menu} onClickAdd={onClickAdd} />
              <Cart
                products={products}
                onClickAdd={onClickAdd}
                onClickLess={onClickLess}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
