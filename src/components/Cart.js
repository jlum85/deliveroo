import React from "react";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import "./Cart.css";

const Cart = props => {
  const bCart = props.products.length > 0;
  const shippingCost = 2.5;
  const getCartItem = () => {
    const elements = props.products.map((item, index) => {
      return (
        <CartProduct
          key={item.id}
          product={item}
          onClickAdd={props.onClickAdd}
          onClickLess={props.onClickLess}
        />
      );
    });
    return <>{elements}</>;
  };

  const subTotal = props.products.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div className="cart">
      <div className="cartItem">
        <div className="cartHeader">
          <button className={bCart ? "validCart" : "validCart btnDisabled"}>
            Valider mon panier
          </button>
        </div>

        {bCart ? (
          <>
            <div className="products subTotal">{getCartItem()} </div>
            <CartTotal subTotal={subTotal} shippingCost={shippingCost} />
          </>
        ) : (
          <div className="emptyCart"> Votre panier est vide</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
