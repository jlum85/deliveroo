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
          <svg
            onClick={() => {
              props.onClickRemove();
            }}
            className={bCart ? "clearCart" : "clearCartDisabled"}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0
            0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
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
